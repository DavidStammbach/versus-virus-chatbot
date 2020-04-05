import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactWebChat from './Webchat';

function App() {
    return (
        <div className="App">
            <div>
                <header>
                    <img src="./kanton_zh_header.png"></img>
                </header>
            </div>

            <div className="container content">
                <div className="sidemenu sticky-top">
                    <div className="collapse navbar-collapse d-lg-block" id="navbarSupportedContent">
                        {<div id="sidemenu-zh">
                            <a class="nav-link sidemenu-zh-link" href="#top">Coronavirus</a>
                            <a class="nav-link sidemenu-zh-link" href="#top">News</a>
                            <a class="nav-link sidemenu-zh-link" href="#top">Regierungsratsbeschlüsse</a>
                            <a class="nav-link sidemenu-zh-link" href="#top">Wahlen & Abstimmungen</a>
                            <a class="nav-link sidemenu-zh-link" href="#top">Vernehmlassungen</a>
                            <a class="nav-link sidemenu-zh-link" href="#top">Amtsblatt</a>
                            <a class="nav-link sidemenu-zh-link" href="#top">Kurzarbeit Informationen</a>
                        </div>}
                    </div>
                </div>
                <main>
                    <section id="dashboard">
                        <div id="dashboard-container">
                            {/* <h2>Dashbaord</h2> */}
                            <p>Aktuelle Informationen zur Lage in der Schweiz</p>
                            <div class="tableauPlaceholder" id="viz1585984946311"><noscript>
                                <a href=''>
                                    <img id="bag-dashboard-img" alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Co&#47;Covid19_15852360559170&#47;Dashboard1d&#47;1_rss.png' />
                                </a>
                            </noscript><script src="https://public.tableau.com/javascripts/api/viz_v1.js"></script>
                                <iframe id="bag-dashboard" marginheight="0" marginwidth="0" title="Data Visualization" allowtransparency="true" allowfullscreen="true" class="tableauViz" src="https://public.tableau.com/views/Covid19_15852360559170/Dashboard1d?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fpublic.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:animate_transition=yes&amp;:display_static_image=no&amp;:display_spinner=no&amp;:display_overlay=yes&amp;:display_count=yes&amp;publish=yes&amp;:loadOrderID=0" frameborder="0"></iframe>
                            </div>
                        </div>

                        <div id="chatbot-container">
                            {/* <h2>Chatbot</h2> */}
                            <p>Hast du Fragen zur Kurzarbeit?</p>
                            <iframe id="chatbot" src='https://webchat.botframework.com/embed/versus-virus-bot?s=gBMtzerPyr0.o4xxgEoupK0Z4MCeTYCQvtBNn3Hdv0nqTmGiHWZrx0w'></iframe>
                        </div>
                    </section>
                    <section>
                    </section>
                </main>

            </div>

            <footer className="text-center">
                &copy; David Stammbach
        </footer>

        </div>
    );
}

export default App;