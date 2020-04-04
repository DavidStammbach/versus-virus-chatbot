# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License.

from azure.cognitiveservices.language.luis.runtime.models import LuisResult

from botbuilder.ai.luis import LuisApplication, LuisRecognizer, LuisPredictionOptions
# from botbuilder.ai.qna import QnAMaker, QnAMakerEndpoint
from botbuilder.core import ActivityHandler, TurnContext, RecognizerResult, MessageFactory
from botbuilder.schema import ChannelAccount, SuggestedActions, CardAction, ActionTypes
from config import DefaultConfig
import pandas as pd


class DispatchBot(ActivityHandler):
    def __init__(self, config: DefaultConfig):

        self.response_dict = pd.read_excel('../Backend/intents.xlsx').set_index(['intent']).T.to_dict('list')
        self.state = 0
        self.loop_flag = False
        luis_application = LuisApplication(
            config.LUIS_APP_ID,
            config.LUIS_API_KEY,
            "https://" + config.LUIS_API_HOST_NAME,
        )
        luis_options = LuisPredictionOptions(
            include_all_intents=True, include_instance_data=True
        )
        self.recognizer = LuisRecognizer(luis_application, luis_options, True)

    async def send_suggested_actions(self, turn_context: TurnContext):
        if self.state == 0:
            reply = MessageFactory.text("Guten Tag, haben sie Fragen zur Kurzarbeit?")

        elif self.state == 1:
            reply = MessageFactory.text('''Hast du eine Frage zu folgenden Punkten?
                    Anspruch auf Kurzarbeit Entschädigung?
                    Voranmeldung von Kurzarbeit
                    Verfügung der Arbeitslosenversicherung
                    Einführung von Kurzarbeit
                    Abrechnung von Kurzarbeitsentschädigung
                    Auszahlung der Kurzarbeitsentschädigung''')

        elif self.state == 2:
            self.state -= 1
            self.loop_flag = True
            reply = MessageFactory.text("Hast du noch mehr Fragen?")

        reply.suggested_actions = SuggestedActions(
            actions=[
                CardAction(title="Ja", type=ActionTypes.im_back, value="Ja"),
                CardAction(title="Nein", type=ActionTypes.im_back, value="Nein")
            ]
        )

        return await turn_context.send_activity(reply)

    async def on_members_added_activity(
            self, members_added: [ChannelAccount], turn_context: TurnContext
    ):
        for member in members_added:
            if member.id != turn_context.activity.recipient.id:
                await self.send_suggested_actions(turn_context)

    async def on_message_activity(self, turn_context: TurnContext):

        if self.state == 0:
            if turn_context.activity.text == 'Ja':
                self.state += 1
                await self.send_suggested_actions(turn_context)
            else:
                await turn_context.send_activity("Tschau")

        elif self.state == 1:
            if turn_context.activity.text == 'Ja':
                self.state += 1
                await turn_context.send_activity("Alles klar. Was möchtest du wissen?")
            else:
                if self.loop_flag:
                    await turn_context.send_activity("Tschau")
                else:
                    await turn_context.send_activity("Rufe Hotline")

        elif self.state == 2:
            # First, we use the dispatch model to determine which cognitive service (LUIS or QnA) to use.
            recognizer_result = await self.recognizer.recognize(turn_context)
            # Top intent tell us which cognitive service to use.
            intent = LuisRecognizer.top_intent(recognizer_result)
            # Next, we call the dispatcher with the top intent.
            await self._dispatch_to_top_intent(turn_context, intent)
            # Ask for more questions
            await self.send_suggested_actions(turn_context)

    async def _dispatch_to_top_intent(self, turn_context: TurnContext, intent):

        response = str(self.response_dict[str(intent)][0])
        await turn_context.send_activity(response)

