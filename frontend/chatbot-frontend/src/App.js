import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactWebChat from './Webchat';

var x = 0;

function getUserID(x) {
    console.log('getUserID')
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://webchat.botframework.com/api/tokens", true);
    xhr.setRequestHeader('Authorization', 'BotConnector ' + '3BGWHhdtp90.h-K3J-w_w_RWn13XIAC5Tb8hUVTdPIjl5cerr4Fh8xw');
    xhr.send();
    xhr.onreadystatechange = processRequest;

    function processRequest(e) {
      if (xhr.readyState == 4  && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log('got response from server ' + response);
        x = 1
        document.getElementById("chat").src="https://webchat.botframework.com/embed/lucas-direct-line?t="+response
      }
    }
    return x;
}

function App() {

    if (x === 0) {
        /* getUserID(x) */
    }

    return (
        <div className="App">
            {/* <div className="container"> */}
            <div>
                <header>
                    <div className="header-title"></div>
                    <div className="header-author"></div>
                    <div className="header-logo">
                        <img src="./logo.png" alt="logo" height="120" />
                    </div>
                </header>
            </div>
            <div className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>

            <div className="container content">
                {/* <div className="content"> */}
                <div className="sidemenu sticky-top">
                    <div className="collapse navbar-collapse d-lg-block" id="navbarSupportedContent">
                        <nav class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#top">Home</a>
                            </li>
                        </nav>
                        {/* <nav class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#top">Dashboard</a>
                        </li>
                    </nav> */}
                        <nav class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#chatbot-container">Chat</a>
                            </li>
                        </nav>
                        <nav class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#dashboard">Weitere Informationen</a>
                            </li>
                        </nav>
                        <nav class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#viz1585984946311">Aktuelle Situation</a>
                            </li>
                        </nav>
                        <nav class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                        </nav>
                    </div>
                </div>
                <main>
                    <section id="chatbot-container">
                        {/* <h1 id="chat">Chat</h1> */}
                        <div>
                            {/* <div id="chatbot-container"> */}
                            <h5 id="chatbot-title">Haben Sie Fragen zur Kurzarbeit?</h5>
                            <iframe id="chatbot" src='https://webchat.botframework.com/embed/versus-virus-bot?s=gBMtzerPyr0.o4xxgEoupK0Z4MCeTYCQvtBNn3Hdv0nqTmGiHWZrx0w'></iframe>
                            {/* <iframe id="chatbot" src='https://webchat.botframework.com/embed/versus-virus-bot-2?s=3BGWHhdtp90.h-K3J-w_w_RWn13XIAC5Tb8hUVTdPIjl5cerr4Fh8xw'></iframe> */}
                            {/* <iframe id="chat"></iframe> */}
                            {/* <ReactWebChat></ReactWebChat> */}
                        </div>
                        <div id="rss_feed">
                            {/* <img src="./RSS_Feed.png"></img> */}
                            <div class="list-group news-feed">
                                <div class="list-group">
                                    <div class="list-group-header">
                                        <h5 id="news-title" class="pull-left">Medienmitteilungen</h5>
                                        <a href="https://www.bag.admin.ch/bag/de/home/das-bag/aktuell/medienmitteilungen.html" target="_blank" rel="noopener noreferrer" title="Alle" class="pull-right icon icon--before icon--list">
                                            Alle
								</a>
                                    </div>
                                </div>
                                <div class="scroll-y mod mod-dynamic js-equalheight done equalheight-ready" data-equalheight-line="true" data-url="/bag/de/home/_jcr_content/par/columncontrols_1/items/1/column/nsbnewslist.entries.html" aria-live="off" aria-atomic="true" aria-relevant="all" data-connectors="dynamicNewsList"><div class="mod mod-nsbnewslist">
                                    {/* <input class="add-param" type="hidden" name="startDate" value="" aria-hidden="true" style="height: 0px;">
			<input class="add-param" type="hidden" name="endDate" value="2020-04-05" aria-hidden="true" style="height: 0px;">
			<input class="add-param" type="hidden" name="organization" value="317" aria-hidden="true" style="height: 0px;">
			<input class="add-param" type="hidden" name="topic" value="" aria-hidden="true" style="height: 0px;"> */}

                                    <div class="list-group-item">
                                        <p>
                                            03.04.2020</p>
                                        <h3>
                                            <a href="https://www.bag.admin.ch/bag/de/home/das-bag/aktuell/medienmitteilungen.msg-id-78686.html" target="_blank" rel="noopener noreferrer">
                                                Coronavirus: Bundesrat regelt Versorgung mit wichtigen medizinischen Gütern</a>
                                        </h3>
                                    </div>
                                    <div class="list-group-item">
                                        <p>
                                            03.04.2020</p>
                                        <h3>
                                            <a href="https://www.bag.admin.ch/bag/de/home/das-bag/aktuell/medienmitteilungen.msg-id-78685.html" target="_blank" rel="noopener noreferrer">
                                                Anne Lévy wird neue Direktorin des Bundesamts für Gesundheit</a>
                                        </h3>
                                    </div>
                                    <div class="list-group-item">
                                        <p>
                                            02.04.2020</p>
                                        <h3>
                                            <a href="https://www.bag.admin.ch/bag/de/home/das-bag/aktuell/medienmitteilungen.msg-id-78658.html" target="_blank" rel="noopener noreferrer">
                                                Vereinfachter Zugang zu Arzneimitteln gegen dermatologische und urogenitale Erkrankungen</a>
                                        </h3>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div id="rss-feed">
                        </div>
                    </section>
                    <section id="dashboard">
                        {/* <h1>Dashboard</h1> */}
                        {/* <iframe id="bag-dashboard"marginheight="0" marginwidth="0" title="Data Visualization" allowtransparency="true" allowfullscreen="true" class="tableauViz" src="https://public.tableau.com/views/Covid19_15852360559170/Dashboard1d?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fpublic.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:animate_transition=yes&amp;:display_static_image=no&amp;:display_spinner=no&amp;:display_overlay=yes&amp;:display_count=yes&amp;publish=yes&amp;:loadOrderID=0" frameborder="0"></iframe> */}

                        <h5>Aktuelle Situation in der Schweiz</h5>
                        <div class="tableauPlaceholder" id="viz1585984946311"><noscript><a href=''><img id="bag-dashboard-img" alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Co&#47;Covid19_15852360559170&#47;Dashboard1d&#47;1_rss.png' /></a></noscript><script src="https://public.tableau.com/javascripts/api/viz_v1.js"></script><iframe id="bag-dashboard" marginheight="0" marginwidth="0" title="Data Visualization" allowtransparency="true" allowfullscreen="true" class="tableauViz" src="https://public.tableau.com/views/Covid19_15852360559170/Dashboard1d?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fpublic.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:animate_transition=yes&amp;:display_static_image=no&amp;:display_spinner=no&amp;:display_overlay=yes&amp;:display_count=yes&amp;publish=yes&amp;:loadOrderID=0" frameborder="0"></iframe></div>

                        <h5>Weiterführende Links</h5>
                        <p></p>
                        <p><a href="https://www.ch.ch/de/kurzarbeit/" target="_blank" rel="noopener noreferrer">Was ist Kurzarbeit?</a></p>
                        <p><a href="https://www.weka.ch/themen/personal/arbeitszeit-und-absenzen/arbeitszeitmodelle/article/kurzarbeit-anspruch-und-arbeitszeitdaten/" target="_blank" rel="noopener noreferrer">Wer hat Anspruch auf Kurzarbeit?</a></p>
                        <p><a href="https://experience.arcgis.com/experience/115cd04485904fa7a5629b683a949390" target="_blank" rel="noopener noreferrer">Corona News</a></p>
                        <p><a href="https://www.bag.admin.ch/bag/de/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/situation-schweiz-und-international.html" target="_blank" rel="noopener noreferrer">BAG</a></p>
                    </section>
                    {/* <section>
                        <h1 id="chat">Chat</h1>
                        <iframe id="chatbot" src='https://webchat.botframework.com/embed/versus-virus-bot?s=gBMtzerPyr0.o4xxgEoupK0Z4MCeTYCQvtBNn3Hdv0nqTmGiHWZrx0w'></iframe>
                    </section> */}
                    {/* <section>
                        <ReactWebChat></ReactWebChat>
                    </section> */}
                    <section id="about">
                        <h5>Über</h5>
                        <p>Webapplikation für den <a target="_blank" rel="noopener noreferrer" href="https://www.versusvirus.ch/">Versus Virus Hackathon 2020</a></p>
                    </section>
                </main>

            </div>

            <footer className="text-center">
                &copy;
                <div>
                    David Stammbach<br />
                    Jürg Käser<br />
                    Minh-kha Nguyen<br />
                    Torben Mannhart<br />
                </div>
            </footer>

        </div>
    );
}

export default App;