import { Accordion, Container } from "react-bootstrap";
import "./Privacy.css";
import React from "react";

export default function Privacy(){
    return(
        <React.Fragment>
            <Container className="content">
                <h1>Privacy Notice</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h2>What personal data do we collect?</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>Personal data, or personal information, means any information about you which could be used to identify you.</p>
                            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                            <ul>
                                <li><b>Identity Data</b> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender;</li>
                                <li><b>Contact Data</b> includes billing address, delivery address, email address and telephone numbers;</li>
                                <li><b>Financial Data</b> includes bank account and payment card details;</li>
                                <li><b>Transaction Data</b> includes details about payments to and from you and other details of products and services you have purchased from us;</li>
                                <li><b>Technical Data</b> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website;</li>
                                <li><b>Profile Data</b> includes your username and password, your interests, preferences, feedback and survey responses;</li>
                                <li><b>Usage Data</b> includes information about how you use our website, products and services, engage and interact within your MyBCS account;</li>
                                <li><b>Marketing and Communications Data</b> includes your preferences in receiving information and marketing from us and our third parties and your communication preferences;</li>
                                <li><b>Behavioural / Conduct Data</b> when dealing with Disciplinary matters;</li>
                                <li><b>Educational, School, Organisational and Career Data</b> when processing scholarship applications, or joining our Computing at School community.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h2>How we collect your personal data</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>We use different methods to collect data from and about you through:</p>
                            <p><b>Direct interactions</b>. You may give us your identity, contact and financial data by filling in forms or by corresponding with us by post, phone, email or in person. This includes personal data you provide when you:</p>
                            <ul>
                                <li>apply for our products or services;</li>
                                <li>correspond with BCS (Isle of Man) Limited;</li>
                                <li>create an account on our website;</li>
                                <li>apply for membership or professional registrations;</li>
                                <li>volunteer to support BCS (Isle of Man) Limited in all aspects;</li>
                                <li>call our customer services department;</li>
                                <li>register for the learning platform Learning Hub / Springboard provided to BCS members for free;</li>
                                <li>subscribe to our service or publications;</li>
                                <li>register or are registered by a training provider, for an examination or certificate;</li>
                                <li>register for an event;</li>
                                <li>request marketing to be sent to you;</li>
                                <li>process your application for scholarships;</li>
                                <li>access resources, including videos and podcast recordings;</li>
                                <li>participate in surveys; or</li>
                                <li>give us some feedback.</li>
                            </ul>
                            <p><b>Automated technologies or interactions</b>. We may collect technical data about your equipment, browsing actions and patterns including the IP address used; login information; browser type and version, operating systems and platforms when you interact with our website We may also collect information about your visit including the pages you visited; what you searched for; length of visits and methods used to browse away from the page. We collect this personal data by using cookies, server logs and other similar technologies. We may also receive technical data about you if you visit other websites employing our cookies. Please see our "Cookies Notice" statement on the BCS (Isle of Man) Limited website.</p>
                            <p><b>Third parties or publicly available sources</b>. We may receive personal data about you from various third parties and public sources as set out below:</p>
                            <ul>
                                <li>Contact, financial and transaction data from providers of technical, payment and delivery services based inside or outside the EU;</li>
                                <li>Identity and contact data from publicly available sources such as Companies House and the Electoral Register based inside the EU.</li>
                                <li>Identity and/or contact data from third parties to which you have given consent to share your data to hear about the products and services of BCS.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h2>How we use your personal data</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>When we ask you to supply us with personal data, we will make it clear whether the personal data we are asking for must be supplied so that we can provide the products and services to you, or whether the supply of any personal data we ask for is optional.</p>
                            <p>We may use your personal data to fulfil a contract or take steps linked to a contract:</p>
                            <ul>
                                <li>to provide the products and/or services to you;</li>
                                <li>to communicate with you in relation to the provision of the contracted products and services;</li>
                                <li>to provide you with administrative support such as account creation, security and responding to issues;</li>
                                <li>to provide an improved customer experience by recording calls and using them for training purposes and;</li>
                                <li>to work with you and support you as you volunteer your time for us;</li>
                                <li>to provide you with surveys, information about our awards and events, offers and promotions, related to the products and/or services.</li>
                            </ul>

                            <h3>Legitimate Interest</h3>
                            <p>Where the collection of data is necessary for purposes which are in our, or third party’s legitimate interests. These interests are:</p>
                            <ul>
                                <li>communicating with you in relation to any queries, issues, complaints, examinations, professional membership, financial transactions;</li>
                                <li>improving the quality of experience when you interact with our products or services including testing the performance and customer experience of our website;</li>
                                <li>to enhance our offering, by identifying your interactions through our website, so that we can produce more relevant and engaging content;</li>
                                <li>where Organisational Membership is held through your employer, aggregated data may be shared with them to assess if their organisations members are utilising their membership benefits;</li>
                                <li>improving the quality of experience when you interact with us directly through our customer services department;</li>
                                <li>performing analytics on sales or marketing data, determining the effectiveness of promotional campaigns;</li>
                                <li>dealing with disciplinary cases of BCS members.</li>
                            </ul>

                            <h3>Contract</h3>
                            <p>Where there is a contract between BCS (Isle of Man) Limited and your centre, training provider, school, hub or employer we will be processing your data to fulfil our obligations under such contract.</p>

                            <h3>Consent</h3>
                            <p>Where you have given your express permission to receive marketing communications, we may use your data to send you newsletters, surveys, information about our awards and events, exam, offers and promotions, related to products and services which may be of interest to you.</p>
                            
                            <h3>Where required by law</h3>
                            <p>We may also process your personal data if required by law, including responding to requests by government or law enforcement agencies or for the prevention or crime or fraud.</p>

                            <h3>Special Category Data</h3>
                            <p>Where necessary, BCS (Isle of Man) Limited may collect certain special category from you. Special category data is classified as information about your racial or ethnic origin, political opinions, religious beliefs, trade union activities, physical or mental health, sexual life or details or criminal offences, or genetic or biometric data). This will only be done with your explicit consent, and we will only use the information for the purpose we have collected it.</p>
                            <p>If you have provided us with special category data for us to make reasonable adjustments for you when you take your BCS exam, we will provide the invigilator with only the minimum amount of information needed for them to conduct the exam according to the adjustment made. Neither the special category data nor the adjustment will not be shown on your certificate.</p>

                            <h3>Marketing</h3>
                            <p>We may use personal information to send direct marketing communications about our products and services that we feel you will be interested in. This may be in the form of email, post, telephone or by SMS. You can always choose to opt out of receiving direct marketing as all our marketing communications include unsubscribe links, alternatively, you can contact us to stop further communications. We also carry out customer insight analysis from our interactions with you to help improve our products and services.</p>

                            <h3>Event Booking</h3>
                            <p>BCS (Isle of Man) Limited uses Tito and Circle for the majority of its event bookings and participants will register directly with these organisations. Please refer to their Privacy Policy (<a href="https://ti.to/privacy" target="_blank" rel="noreferrer">Tito</a>, <a href="https://login.circle.so/privacy" target="_blank" rel="noreferrer">Circle</a>) for details of how they will process your data. As BCS (Isle of Man) Limited is the data controller, please contact us for any request to exercise your rights as an individual (see section 8).</p>

                            <h3>Scholarships</h3>
                            <p>BCS (Isle of Man) Limited will collect and use your information to process your scholarship application and administer the scholarship scheme. We may share your data with the Department for Education who may retain and use your information for the purposes of teacher recruitment and retention statistics. The legal basis for DfE processing this data is that such processing is necessary for them to perform a task in the public interest pursuant to Section 14 of the Education Act 2002. BCS has a data sharing agreement with the DfE for these purposes.</p>
                            <p>To support you in your journey towards a new career in teaching, BCS would like to register you with the DfE Get into Teaching Service which is administered by Teleperformance UK Limited. The service offers a Premier Plus service to those who hold (or are predicated to gain) a first class, 2:1 or 2:2 degree). Premier Plus provides tailored advice about initial teacher training, support with your application from a dedicated advisor as well as help in securing school-based experience and invitations to exclusive events. Your data will only be processed in this way if you give your consent to being registered with the DfE Get into Teaching Service. If you do give your consent, then DfE will share your data with Teleperformance UK Limited. You can unsubscribe from this service at any time by notifying us that you wish to be removed from the Get into Teaching database, by emailing us at <a href="mailto:scholarships@bcs.uk">scholarships@bcs.uk</a>.</p>

                            <h3>Organisational Membership and Academic Membership</h3>
                            <p>We may collect information about you from the company you work for or the place where you study in order to include you in our Organisational Membership or Academic Membership scheme. If these schemes apply to you, your employer or education provider will let you know that this is the case.</p>

                            <h3>Individual Membership</h3>
                            <p>BCS uses a third-party fulfilment partner to process and send out your membership packs and digital assets.</p>

                            <h3>Professional Registrations</h3>
                            <p>BCS will collect and use your information to process your interest and/or application for professional registration. You can choose to update your preferences at any time by updating your BCS membership profile with your preferred communication preferences.</p>
                            <p>For the purpose of application assessment, your information will be shared with BCS assessors and the relevant registration body. This will be shared securely and solely for the purpose of the assessment of that application.</p>

                        
                            <h3>Social Media</h3>
                            <p>It is expected that you will delete any data from social media accounts that you have set up yourself (or have access to). BCS may be able to remove you from the Group in question but not the data itself because this data belongs to you. You may be able to make a request directly to the platform provider (such as Facebook) to delete your data.</p>

                            <h3>Cookies</h3>
                            <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, some parts of the BCS website may become inaccessible or not function properly. You can also turn off advertising by visiting <a href="http://www.youronlinechoices.com/uk/">http://www.youronlinechoices.com/uk/</a> and adjusting your privacy settings in your browser.</p>

                            <h3>Profiling</h3>
                            <p>Individuals who apply for AMBCS membership; those entitled to AMBCS will automatically be given AMBCS through an automated process. If individuals apply for other grades and are unsuccessful, they will be offered a more appropriate grade of membership.</p>

                            <h3>Change of Purpose</h3>
                            <p>We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.</p>
                            <p>If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.</p>
                            <p>Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><h2>Who we share your personal data with</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>We may share your personal data with other members of staff within BCS and Committee Members within BCS (Isle of Man) Limited when you provide us with your information. We take all reasonable steps to ensure that our staff protect your personal data and are aware of their information security obligations. We limit access to your personal data to those who have a business need to know it.</p>

                            <h3>Third Parties</h3>
                            <p>We may also share your personal data with trusted third parties including:</p>
                            <ul>
                                <li>Service providers engaged and contracted to us in connection with the provision of the products and services;</li>
                                <li>BCS (Isle of Man) Limited may also be bound to share data with the police or other law enforcement agencies in the event of a crime;</li>
                                <li>Fulfilment houses.</li>
                            </ul>
                            <p>We will ensure there is a contract in place with the categories of recipients listed above which include obligations in relation to the confidentiality, security and lawful processing of any personal data shared with them. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</p>

                            <h3>Protecting information outside of the UK</h3>
                            <p>Some of the organisations we share information with may be located outside of the IOM or UK. We will always take steps to ensure that any transfer of information outside of the IOM or UK is carefully managed to protect your privacy rights. We will ensure that the transfer of personal data will be protected by appropriate safeguards, including the use of standard data protection clauses where the data protection authority does not believe that the third country has adequate data protection laws.</p>

                            <h3>Extraordinary Circumstances</h3>
                            <p>Occasionally and only where necessary to fulfil our legal obligations, conduct investigations and/or deliver our services, we may share your information with law enforcement organisations such as the police or courts.</p>

                            <h3>Examination Results</h3>
                            <p>All exam results will be held for a period of 15 years as this is a record of a person’s qualifications unless there is a specific request to delete the data via a right to be forgotten request.</p>
                            <p>BCS will share exam results and marks with the Training Provider as there is a ‘reasonable expectation’ for this information to be provided. BCS policy is not to share results with any employer (unless they also are your Training Provider), relative or friend unless express consent is obtained to do so. Where BCS works with other Examination Providers (such as ISTQB or EXIN) we will share the exam marks with them.</p>

                            <h3>Recordings</h3>
                            <p>We may record telephone calls you make to our customer contact centre to train staff or check for mistakes. We do this in the interests of offering a good service to our customers and to protect public funds. Your information may be shared with other organisations if they have a legal right to it. We will delete call recording one month after the call was made.</p>
                            <p>We also record some interviews, if you are invited to an interview, we may ask your permission in advance of the interview starting or we will use Legitimate Interest as our lawful basis for the recording. We record interviews in the event of a complaint or appeal. We will delete these recordings at the end of the appeal window which is 20 working days.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><h2>How long will we keep your personal data?</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                            <p>To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.</p>
                            <h3>Financial Data</h3>
                            <p>BCS (Isle of Man) Limited will not delete any data which relates to financial transactions that is less than seven years old as we are legally required to hold this information for seven years.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><h2>Where we store your personal data and how it's protected</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>We take reasonable steps to protect your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.</p>
                            <p>In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality. We also have procedures in place to deal with any suspected data security breach. We will notify you and the relevant Regulator(s) such as the ICO of a suspected data security breach where we are legally required to do so.</p>
                            <p>Where you have a username and password (or other identification information) which enables you to access certain services or BCS portals, it is your responsibility to keep this information secure. Please do not share your password with anyone. Unfortunately, the transmission of information via the internet is not completely secure and although we do our best to protect your personal data, we cannot guarantee the security of your personal data transmitted to the BCS website; any transmission is at your own risk. Once we have received your personal data, we will use strict protocols and security features to try to prevent unauthorised access.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header><h2>Your rights</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>You have legal rights under the data protection laws in relation to your personal data. Read below to learn more about each right you have.</p>
                            <p>We may ask you for proof of identity when making a request to exercise any of these rights. We do this to ensure we only disclose information when we know we are dealing with the right person.</p>
                            <p>We will not charge you for any of these requests unless we think your request is unfounded, repetitive or excessive. Where a fee is necessary, we will inform you before we proceed with your request.</p>
                            <p>We will respond to all valid requests within 30 days. It may however take us longer if the request is particularly complicated or you have made several requests. We will always let you know if we think a response will take longer than one month. To speed up our response, we may ask you provide more detail about what you want to receive or are concerned about.</p>
                            <p>We may not always be able to do what you have asked, for example, if it would impact the duty of confidentiality we owe to others, or if we are otherwise legally entitled to deal with the request in a different way.</p>

                            <h3>The right to be informed</h3>
                            <p>You can ask us what data we hold on you and what we do with it.</p>

                            <h3>The Right of Access / Data Subject Access Request (DSAR)</h3>
                            <p>You can ask us to provide you with a copy of your personal data that we hold about you by contacting us at <a href="mailto:info@bcs.org.im">info@bcs.org.im</a>. Please note that BCS (Isle of Man) Limited will not provide copies of any emails sent to or received from yourself as you already have received this information. We also will not provide any internal emails or documents that may contain your name unless the information contained in the email is:</p>
                            <ul>
                                <li>significantly biographical with regards to you as the data subject and/or</li>
                                <li>you as the data subject were the focus of attention in the document.</li>
                            </ul>
                            <p>We may be unable to make all information available to you if, for example, making the information available to you would reveal personal data about another person or if your request is manifestly unfounded or excessive.</p>

                            <h3>Examination Paper Exemption</h3>
                            <p>Individuals cannot use a Subject Access Request to obtain examination papers, examination answers to questions, or scripts, as this is exempt under the Data Protection Act Schedule 2 Part 4 Clause 25, this includes recordings of exams and professional assessments.</p>
                            <p>This is because it could compromise the professional assessment questions and examination papers which may be re-used. Examiner and professional assessment reports / comments are disclosable if they have been completed.</p>

                            <h3>Correcting Personal Information / Right of Rectification</h3>
                            <p>You can ask us to correct any information about you which is incorrect. We will be happy to correct such information but may need to verify the accuracy of it first. BCS members can change their own personal information at any time by logging in to MyBCS and updating personal details on the “My profile” page.</p>
                            <p>Computing at School members can change their own personal information at any time by logging in to https://www.computingatschool.org.uk/ and updating personal details directly.</p>

                            <h3>Right to Erasure / Right to Be Forgotten</h3>
                            <p>You can ask us to:</p>
                            <ul>
                                <li>erase your personal information if you think we no longer need to use of for the purpose we collected it from you;</li>
                                <li>erase your personal information if you have either withheld your consent to us using your information (if we originally asked for your consent to use your information), or exercised your right to object to further legitimate use of your information, where we have used it unlawfully or where we are subject to a legal obligation to erase your personal information</li>
                            </ul>
                            <p>We may not always be able to comply with your request, for example, if we need to keep using your personal information in order to comply with our legal obligations or where we need to use it to establish, exercise or defend legal claims.</p>

                            <h3>Right to Restrict Processing / Withdrawing Consent</h3>
                            <p>Where we have asked for your consent to use your personal information, you will always have the right to withdraw your consent. We will still hold your details on our databases but will not contact you.</p>

                            <h3>The Right to Object</h3>
                            <p>You can object to the use of your personal information for direct marketing purposes. We explain in the marketing section of this privacy notice more about our approach to direct marketing.</p>

                            <h3>Requesting a transfer of personal information / Data Portability</h3>
                            <p>You can ask us to:</p>
                            <ul>
                                <li>provide your personal information to you in a structured, commonly used, and machine-readable format,</li>
                                <li>or you can ask to have it transferred directly to another data controller (i.e. another organisation).</li>
                            </ul>
                            <p>You can only do this where we use your personal information in order to perform a contract with you, or where we asked for your consent to use your personal information. This right does not apply to any personal information which we hold, or process based on our legitimate interest or which is not held in digital form.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header><h2>Third party requests</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>We accept third party requests from individuals such as friends, relatives, solicitors or from persons who have power of attorney where:</p>
                            <ol>
                                <li>we have a letter from the data subject stating that they want a named person to make these changes on their behalf;</li>
                                <li>we are given evidence of power of attorney</li>
                                <li>the data subject and third party call together (either by being in the same room at the same time) or by a three-way call with BCS (Isle of Man) Limited.</li>
                            </ol>
                            <h3>If you fail to provide personal data</h3>
                            <p>Where we need to collect personal data by law, or under the terms of a contract we have with you and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with goods or services). In this case, we may have to cancel a product or service you have with us, but we will notify you if this is the case at the time.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header><h2>Contact and complaints</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>If you would like to contact us about the use of your personal data, or exercising your personal rights then please contact us at <a href="mailto:info@bcs.org.im">info@bcs.org.im</a>.</p>
                            <h3>Your right to complain</h3>
                            <p>If you believe that your data protection rights have been breached and we have been unable to resolve your concern, you have the right to report your concern to your local data protection supervisory authority. In the Isle of Man this is the Information Commissioner’s Office (ICO) and you can raise your concerns by going to https://www.inforights.im/.</p>

                            <p>We do ask that you please attempt to resolve any issue with us before contacting the ICO.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header><h2>Review and monitoring</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>We will review this privacy notice on an annual basis in line with departmental quality standards and regulatory criteria.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header><h2>Cookies Notice</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>We do not use any cookies within this site.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </React.Fragment>
    )
}