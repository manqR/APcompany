import React, { Component } from 'react';
import logo from './img/logo2.png';
import {TeamView} from './teamView';

class TeamTxt extends Component {
    render() {

        const styleTeam = {
            paddingTop: '150px',
            width: '100%',            
            display: 'flex',
            justifyContent: 'space-around'
        }
        return (
            <section className="team2">
                <span>
                    <span>
                        <div style={styleTeam}>
                            <a  data="apadvocates" style={{border: '0px solid'}}><img src={ logo } alt="logo" style={{width:'8vw'}}/></a>
                            {/* <img src={ logo } alt="logo" style={{width:'8vw',height:'6vw',border: '0px solid'}}/> */}
                            {/* <a  data="apconsultant" style={{border: '0px solid'}}><img src={ logo } alt="logo" style={{width:'8vw'}}/></a> */}
                        </div>


                        <aside data="apadvocates" id="apadvocates">

                            <dd data="apadvocates-partner" color="#453a34" onClick={() => TeamView('Partner')}>
                                <span>
                                    <span>
                                        <h1>Partner</h1>
                                    </span>
                                </span>
                            </dd>
                            <dd data="apadvocates-associate" color="#3b2516"  onClick={() => TeamView('Associate')}>
                                <span>
                                    <span>
                                        <h1>Associate</h1>
                                    </span>
                                </span>
                            </dd>    

                        </aside>


                        {/* <aside data="apconsultant" id="apconsultant">
                            
                            <a data="tax" color="#57463a" style={{border: '0px solid', width:'20vw'}}>
                                <span>
                                    <span>
                                        <h1>Tax & Accounting</h1>
                                    </span>
                                </span>
                            </a>
                            
                        </aside>

                        <aside data="tax" id="tax">
                            
                            <dd data="justisiari-p-kusumah" color="#453a34">
                                <span>
                                    <span>
                                        <h1>Partner</h1>
                                    </span>
                                </span>
                            </dd>
                            <dd data="risti-wulansari" color="#3b2516">
                                <span>
                                    <span>
                                        <h1>Our Team</h1>
                                    </span>
                                </span>
                            </dd>    

                        </aside> */}
                        

                        {/* <summary data="justisiari-p-kusumah">
                            <p>Justi has a long and distinguished career in IP law and is recognized as one of Indonesia's leading figures in the area. He is recognized by The Asia Pacific Legal 500 as a leading IP lawyer and was mentioned in Asialaw Leading Lawyers as a leading practitioner in IP and in Chambers Asis-Pacific As a highly recommended lawyer in IP and Telecommunication. In addition to being the Managing Partner role, Justi's main role in the firm is to lead and oversee the Litigation &amp; Enforcement team, Arbitration as well as the Commercial IP, Telecommunication, Media and Technology practice group. Justi was as a member of the IP Experts Team of the Ministry of Law and Human Rights (2011-2015).</p>
                            <p>Justi was the Chairman of the Indonesian IP Consultant Association (Asosiasi Konsultan HKI, 'AKHKI', 2010-2013), and is currently sit as a member of AKHKI's Advisory Board. Justi is also a Member of the International Trademark Association (INTA) and Asian Patent Attorneys Association (AAPA) and Board Member of the Indonesian Intellectual Property Society ("IIPS").</p>
                            <p>Justi has been actively involved with IIPS in promoting IP protection/awareness in Indonesia and was involved in the establishment of Indonesia Anti Counterfeiting Society ("MIAP"). He currently serves as Chairman of MIAP. Justi is also a regular instructor for various training organized by and for the Indonesian Police Force and National IP Task Force.</p>
                            <p>Justi holds a Sarjana Hukum (Bachelor of Law) and Master degrees from Padjajaran University. He has also attended various training courses in Indonesia, Singapore, Canada, the USA, France, Australia, Hong Kong, and Japan, as well as spending time in Melbourne on secondment to one of Australia's largest firms. He is a licensed Advocate and a member of the Indonesian Advocates Association (Peradi).</p>
                        </summary>

                        <summary data="risti-wulansari">
                            <p>Risti has broad expertise in the IP area and has been actively involved in providing assistance for both Indonesian and foreign clients in a variety of IP projects. Risti's main role in the firm is to lead the Non-Contentious Team and oversee the Commercial IP, Telecommunication &amp; IT Division.</p>
                            <p>Risti's role include handling prosecution of trademarks and geographical indications, industrial designs, copyright and patent; enforcement of IP rights; and to lead IP commercial projects, including providing advisory services with respect of franchising, licensing, distributorship, consumer protection, anti-monopoly, as well as issues relating media and data protection/privacy. She holds a Bachelor of Law degree from the Faculty of Law, Trisakti University, Jakarta, majoring in Business Law.</p>
                            <p>Risti is a licensed Advocate and is also admitted to practice as an IP Consultant in 2006. She is also a member of the Indonesian Advocates Association (Peradi), a member of INTA and was an active committee member of AKHKI (2010-2013).</p>
                            <p>Risti was mentioned as one of the "Up and Coming Lawyer" of the IP area for 2015 by Chambers and Partners. Recently, she mentioned in Who's Who Legal for Franchise 2017 (WWL Franchise 2017).</p>
                        </summary>
                        <summary data="wardaya">
                            <p>Wardaya has been practicing law since 1995 with main expertise in litigation. He handles both criminal and civil litigation case representing local and multi-national clients. His main area of litigation includes litigation in in the field of property/real estate, maritime, fishery, criminal, IP, employment, foreign/domestic investment, insurance, bankrupcy and family law.</p>
                            <p>Wardaya graduated from Faculty of Law of the University of Sebelas Maret, Solo in 1995 and received his master degree from Padjajaran University in 2007. He is also a holder of bar license and a member of Indonesian Bar Association or Persatuan Advokat Indonesia (PERADI) since 1999.</p>
                            <p>The joining of Wardaya will definetely reinforce and enrich K&amp;K Advocates litigation and commercial dispute practice.</p>
                        </summary>
                        <summary data="lukman-hakim-basir">
                            <p>Lukman graduated from the Faculty of Law, Padjadjaran Unversity in 2009 majoring in Business Law. He also hold a Master Degree from the University of Mancherster in 2011, majoring in Intellectual Property Law.</p>
                            <p>He joined K&amp;K Advocates in 2012. Prior joining K&amp;K Advocates, Lukman worked at one of the biggest firms in Jakarta.</p>
                            <p>Lukman has been assisting and representing both foreign and local clients in various IP matters, ranging from contentious, non contentious and commercial. In addition to IP matters, he is often asked to also advise clients in relation to media and entertainment, general litigation and arbitration.</p>
                            <p>Lukman is a licensed Advocate and a member of the Indonesian Advocates Association (Peradi).</p>
                        </summary>
                        <summary data="fajar-budiman-kusumo">
                            <p>Fajar obtained his Bachelor of Laws degree in October 2011 from Trisakti University, Jakarta, majoring in Criminal Law.</p>
                            <p>He joined the team at K&amp;K Advocates in January 2012.</p>
                            <p>Fajar assists Indonesian and foreign clients in pursuing IP protection for copyrights, trademarks, patents, trade secrets, and industrial designs. In addition to that, he also assists clients in anti-counterfeiting actions and enforcement measures with the Litigation &amp; Enforcement Team (Contentious Division).</p>
                        </summary>
                        <summary data="elsiana-inda-putri-maharani">
                            <p>Elsiana Inda Putri Maharani obtained her Sarjana Hukum (Bachelor of Laws) in February 2008 from Parahyangan Catholic University, Bandung, majoring in Law and completed her Master&#39;s Degree majoring in Business Law from Parahyangan Chatolic University, Bandung.</p>
                            <p>Elsiana joined K&amp;K Advocates in August 2014. Prior joining K&amp;K Advocates, he worked at one of major litigation law firms in Jakarta.</p>
                            <p>Elsiana assists various Indonesian and foreign clients in Civil Litigation, particularly focussing on Business and Commercial disputes. Since joining K&amp;K Advocates Elsiana has become an important member of the Litigation and Enforcement Team and she have been assisting clients in a wide variety of matters relating to a variety of intellectual property (IP) litigation which also includes the enforcement of IP rights.</p>
                            <p>Elsiana is a licensed Advocate and she also a member of the Indonesian Advocates Association (Peradi) since 2010.</p>
                        </summary>
                        <summary data="danny-kobrata">
                            <p>Danny graduated from Trisakti University in 2012 majoring in Business Law with specialization in Intellectual Property and Information &amp; Technology.</p>
                            <p>He joined K&amp;K Advocates in October 2015 right after he completed his Master Degree on Law and Digital Technologies at Leiden University, the Netherlands. Prior joining K&amp;K Advocates, he worked at one of major law firms in Jakarta.</p>
                            <p>At K&amp;K Advocates, he is involved in various matters related to IP Protection (both contentious and non-contentious), Technology, Media &amp; Telecommunication, and General Corporate. Danny was a recipient of Education Endowment Fund Scholarship from the Indonesian government.</p>
                            <p>He is also a licensed Advocate and a member of the Indonesian Advocates Association (Peradi).</p>
                        </summary>
                        <summary data="ratu-aurora">
                            <p>Aurora graduated from Faculty of Law, Trisakti University, Jakarta, in March 2012, majoring in Private Law. She joined K&amp;K Advocates as a Junior Associate in 2015. Prior to joining K&amp;K Advocates, she has prior experience as a Paralegal from 2012.</p>
                            <p>Her role in K&amp;K Advocates is actively involves in IP prosecution matters.</p>
                            <p>Aurora is also a registered IP Consultant since 2015.</p>
                        </summary>
                        <summary data="rizkiandini-kusumawardhani">
                            <p>Rizkiandini graduated with a Bachelor of Law Degree from the University of Islam Bandung in 2015, majoring in Criminal Law. She joined K&amp;K Advocates in June 2015 as Junior Associate and was promoted to Associate in early 2017.</p>
                            <p>Rizkiandini actively assisting Non-Contentious team for various range of IP prosecution matters.</p>
                        </summary>
                        <summary data="siti-mariam-nabila">
                            <p>Nabila obtained her Bachelor Degree of Law from Universitas Indonesia, Depok, in 2015, majoring in Economic and Business Law. During her period of study, she participated in various student organizations and attended many seminars that embrace her legal knowledge in IP and Commercial fields. Having fashion and intellectual property as her interest, her undergraduate thesis combined fashion and intellectual property issues.</p>
                            <p>Nabila joined K&amp;K Advocates as a Junior Associate, and is actively involved in providing assistance for almost in IP field in Contentious and Non- Contentious, and also Corporate matters.</p>
                        </summary>
                        <summary data="eka-putra-apriliansyah">
                            <p>Eka obtained his Bachelor Degree of Law from UNIKA Atmajaya Jakarta, in 2016, majoring in Economic and Business Law.</p>
                            <p>He joined the team at K&amp;K Advocates in March 2016.</p>
                            <p>In the beginning, Eka has joined K&amp;K Advocates as an Internship for Junior Associate and has successfully obtained full appointment as Junior Associate in 2016 due to his potential abilities and quality of works. Eka actively involves in providing assistance to Non- Contentious team for IP prosecution works as well as assisting the firm's dynamic Contentious team for enforcement works.</p>
                        </summary>
                        <summary data="bhredipta-cresti-socarana">
                            <p>Bhredipta obtained his Bachelor Degree of Law from Universitas Gadjah Mada, Yogyakarta, in 2016, majoring in International Law. During his period of study, He actively involved in Asian Law Students&#39; Association (ALSA) acting as its International Board officer as Vice President of Academic Activities. His team also awarded as 3rd Highest Ranked Team in Foreign Direct Investment International Arbitration Moot Competition, Boston, USA.</p>
                            <p>Prior to joining K&amp;K Advocates, Bhredipta participated in Exchange Program in Leiden Law School, Leiden University, The Netherlands and has completed Internship in Van Vollenhoven Institute, in the same institution.</p>
                            <p>Bhredipta joined K&amp;K Advocates as a Junior Associate, and is actively involved in providing assistance for Commercial and Corporate matters.</p>
                        </summary>
                        <summary data="adrian-lutfi-imantaka">
                            <p>Adrian obtained his Bachelor Degree of Law from Universitas Pancasila, Jakarta in 2016 majoring in Economic and Business Law.</p>
                            <p>He joined K&amp;K Advocates as a Junior Associate in 2016. Adrian has been assisting Non-Contentious team for IP prosecution works.</p>
                        </summary>
                        <summary data="yunita-puspasari">
                            <p>Yunita graduated from Tarakanita Secretarial Academy in June 2004. She worked as a Secretary with the IP Practice Group of a major law firm from 2006. In 2009 she was promoted as a paralegal and continued to work together with the team when K&amp;K Advocates was formed in October 2011. Her role in K&amp;K Advocates is as a Paralegal, actively involved in providing assistance on IP protection for trademarks, patents and industrial designs. Yunita also assists clients in IP prosecution works abroad.</p>
                        </summary>
                        <summary data="lusiana-ayu-mayansari">
                            <p>Lusi obtained her Bachelor degree and graduated from the Faculty of Letters, English Department, Gunadarma University in 2003.Lusi has extensive experience in dealing with legal issues relating to the prosecution trademarks, patents, industrial design and copyrights.</p>
                            <p>Lusi has been actively assisting multinational clients for IP prosecution matters. Lusi joined K&amp;K Advocates in 2013 to support the Non Contentious Team.</p>
                        </summary>
                        <summary data="nugraha-brata-kusumah">
                            <p>Nugraha graduated from Faculty of Social and Politic, Padjadjaran University in 2013 with a Bachelor's Degree in Anthropology. Nugraha becomes a registered IP Consultant in 2014. He joined K&amp;K Advocates in 2016 as a Paralegal to support the Contentious Team (IP protection for copyrights and trademarks) and Non Contentious Team (prosecution trademarks, patents, industrial designs, and copyrights). Nugraha has experience in investigation works especially in Intellectual Property matter.</p>
                        </summary>
                        <summary data="somnis-ferina">
                            <p>Ririn graduated from the University of Borobudur with a Bachelors Degree in Law from the University of Borobudur, Jakarta, majoring in Civil Law. She joined K&amp;K Advocates in April 2013. Her role in K&amp;K Advocates now is as a Secretary and Paralegal, and actively involved in providing assistance for IP prosecution matters for trademarks and industrial designs.</p>
                        </summary>
                        <summary data="denni-koswara">
                            <p>Denni graduated from Padjadjaran University, Bandung in 1994. He has gained more than 12 years of experience working in Advertising and PR Agencies (1994-2007). Some of the employers include TVad, Matari Advertising, AriaWest / AT&amp;T, Subsidiary and Adhouse Exhibition. A passion for organizing was what then brought him to K&amp;K Advocates as an Office Manager and General Affairs Officer.</p>
                        </summary>
                        <summary data="marisca-dwi-putri">
                            <p>Marisca graduated from Pitaloka Secretarial and Management Academy in 2008 and Business Economics Indonesia in 2011. She joined K&amp;K Advocates in 2012. Prior joining K&amp;K Advocates, she worked as a secretary with the corporate group in one of the major firms in Jakarta since 2010.</p>
                            <p>As a finance Manager, her role is to manage the financial aspect of the firm.</p>
                        </summary>
                        <summary data="radita-indrayani">
                            <p>Radita Indrayani graduated from the Faculty of Communications, Padjadjaran University, in June 2004, majoring in Public Relations. She has been working with K&amp;K Advocates as a Paralegal since 2011. Her role in K&amp;K Advocates is actively providing assistance for IP prosecution and takes part in the Finance Division as a billing staff as well as assisting the firm's business development activities.</p>
                        </summary>
                        <summary data="putri-kemalasari">
                            <p>Putri graduated from Tarakanita Secretarial Academy in June 2008. She has been working as a secretary with the IP Practice Group of a major firm since 2010, and transitioned with the team to join K&amp;K Advocates when it was formed in October 2011. Her main role in K&amp;K Advocates is a Billing Staff, and also actively involved as Paralegal to support the non-contentious team in providing assistance on IP prosecution matters for trademarks, patents, and industrial designs.</p>
                        </summary>
                        <summary data="retno-budi-setianingsih">
                            <p>Retno Budi Setianingsih graduated from LIA Institute of Foreign Languages (STBA LIA). She has been working with K&amp;K Advocates as a secretary since 2014. Her main role in K&amp;K Advocates is Secretary to the non-contentious team.</p>
                        </summary>
                        <summary data="ulfi-chaerunnisa">
                            <p>Ulfi graduated from PAKUAN University, she has been working with K&amp;K Advocates as a Personal Assistant to the Managing Partner since 2017.</p>
                        </summary>
                        <summary data="febriany-yusuf">
                            <p>Febriany graduated from Interstudi School of Communication, Jakarta, in 2017 with a Bachelor&#39;s Degree in Communication majoring in Public Relations, she has been working with K&amp;K Advocates as a Business Development Officer since 2015.</p>
                            <p>Her main role in K&amp;K Advocates is to coordinate the firm with the client or potential client as well as administering the firm&#39;s website.</p>
                        </summary>
                        <summary data="bintang-leo-naibaho">
                            <p>Leo obtained his Bachelor of Law degree in 2012 from Bandung School of Law. He joined our litigation team at K&amp;K Advocates in April 2016 as part of our firms litigation practice expansion.</p>
                            <p>Prior to joining K&amp;K Advocates, Leo had worked in some Indonesian prominent litigation law firms and acquires his expertise in general litigation in the areas of criminal law, family law, business, labour and property-related dispute, and bankruptcy. He is also a licensed Advocate and a member of the Indonesian Advocates Association (Peradi).</p>
                        </summary>
                        <summary data="raniya-ockvalynie">
                            <p>Raniya obtained her Bachelor Degree from the University of Indonesia, Depok, in 2017, majoring in Economic and Business Law.</p>
                            <p>During her period of study, she involved in various student organizations such as Asian Law Students Association (ALSA) and Business Law Society (BLS) that embrace her legal knowledge in Commercial sectors.</p>
                            <p>Raniya joined K&amp;K Advocates as a Junior Associate and advises various national and multinational industries on Commercial and Corporate matters.</p>
                        </summary>
                        <summary data="fortuna-alvariza">
                            <p>Fortuna has a longstanding experience in IP law. She is recognized by Managing IP Magazine as one of IP Stars for Trademark and Copyright matters in 2014 to 2017, and mentioned Asia IP Law Magazine as a highly knowledgeable and creative IP lawyer.</p>
                            <p>She is a member of International Trademark Association (INTA), Asian Patent Attorneys Association (APAA), Indonesian French Chamber of Commerce and Industry (IFCCI), Indonesian Advocate Association (PERADI), Indonesian Intellectual Property Attorneys Association (AKHKI) and Indonesian Advocate Alliance (IKADIN).</p>
                            <p>She serves as a treasurer of Asian Patent Attorneys Association (APAA) since 2012 until present, and currently also appointed as a vice treasurer of Indonesian Intellectual Property Attorneys Association (AKHKI). Fortuna was also an off counsel of ad hoc team of IFCCI that provided input on IP development in Indonesia for European Indonesian Business Dialogue (EIBD) 2010 � 2014. She is currently in charge as a standing committee for Industrial Design, representing APAA Indonesia Group.</p>
                            <p>Apart from being a registered IP Attorney, Fortuna is a licensed Advocate. She is board member of Indonesian Advocate Association, West Jakarta Chapter (PERADI DPC Jakarta Barat) and also a board member of Indonesian Advocate Alliance, West Jakarta Chapter (IKADIN Kantor Cabang Jakarta Barat)</p>
                            <p>Fortuna holds a Sarjana Hukum (Bachelor of Law) from Pancasila University majoring in Business Law. She has also attended preparation study on Law of International and European Community Economic Relations at the University of Paris X, Nanterre, France. She was also an apprentice in a French Law Firm for 2 years in Versailles, France.</p>
                            <p>Fortuna attended various training, seminars and law excursion in Europe such as Business in France held by French Chamber of Commerce and Industry of Paris, attending hearings of International conflict at the International Court of Justice in The Hague, and attending seminars at the European Court of Justice in Luxembourg.</p>
                        </summary>
                        <summary data="rizka-khairunnisa">
                            <p>Rizka graduated from Faculty of Law, Trisakti University in May 2017, majoring in Business Law. She joined K&amp;K Advocates as an intern in August 2016 and obtained full appointment as Junior Associate in June 2017.</p>
                            <p>Her role in K&amp;K Advocates is to support the Non-Contentious Team.</p>
                        </summary>
                        <summary data="adelina-handayani">
                            <p>Adelina obtained her Bachelor Degree of Law from Universitas Pancasila, Jakarta in 2016. She joined K&amp;K Advocates as a junior associate.</p>
                            <p>Prior to get involved in IP law field, she had been working in a prominent insurance company as a legal compliance officer.</p>
                            <p>She provides clients with IP prosecution assistance.</p>
                        </summary>
                        <summary data="rizka-fakhirah">
                            <p>Rizka obtained her Bachelor Degree of Law from Universitas Diponegoro, Semarang in 2016. She was one of the best students during her studies in her university.</p>
                            <p>Rizka joined K&amp;K Advocates as a Junior Associate. She has been actively involved in handling IP prosecution for both local and overseas clients.</p>
                        </summary> */}
                    </span>
                </span>
            </section>
        );
    }
}

export default TeamTxt;