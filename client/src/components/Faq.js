import React from 'react';
import './Faq.css';
import Accordion from './Accordion';

const Faq = () => {
  const accordionData = [
    {
      title: 'What is her Excellency Viewpoint on People Management?',
      content: `
      Response by Her Excellency, Cesnabmihilo Dorothy Nuhu-Aken'Ova : 
      I belive that everyone is born equal in rights and dignity.
      I belive that everyone has the potential to attain great heights in their areas of interest and chosen career if furnished with the required resources and opportunities.
      I believe in participatory approaches where everyone is involved in development processes from the very start. This is the way to sustainable development.
      I believe in teamwork where conditions and rules of engagement (roles and responsibilities) are clearly defined, where resources, opportunities, remuneration and reward are made readily available and accessible to all. 
      I know that human resource welfare (including mental health, recreation, learning and development opportunities), is one of the keys to optimal performance.
      I believe in productive discipline. 
      I believe that everyone should be empowered to understand and buy into the values, goals and objectives of their leadership for increased patriotism. 
      I believe that every citizen should be given resilience skills at individual and corporate levels and other appropriate skills to navigate life, surmount challenges, and carry others along.
      I believe in constant periodic monitoring and evaluation, not only of communal and individual tasks, but of all persons involved, in order to be better informed of their developmental needs for growth and competence.
      I believe in inclusivity. I have, for most of my activist life, worked with people with special needs, marginalised groups and stigmatized members of our population. I believe that they deserve to have equal ownership of and a sense of belonging to Nigeria. I believe that they have equal rights as everyone else to enjoy the resources and opportunities that our county affords us and contribute to national development and growth to the best of their abilities.
      I believe that these are some of the most significant ingredients to nation building, peace and stability.`
    },
    {
      title: 'A lot are asking about your manifesto?',
      content: `
       Response by Her Excellency, Cesnabmihilo Dorothy Nuhu-Aken'Ova : 
      We are still in the process of developing the Manifesto.
      The basic principles for its development are feminist principles and approaches which include the following: 
      1. Inclusivity: Everyone is eligible to be a part of this movement provided they respect our clause on equality and non discrimination.
      2. Participatory: We are deliberate and purposeful in ensuring that all the members of this movement are engaged in the process of agenda setting, development and implementation. We are committed to capturing and addressing the voices and concerns of members of this movement and those of the persons affected directly or indirectly by our policies and actions.
      3. Bottom-Up: is an approach that defines the manner in which issues and people are engaged. This means that we move our lens from specific issues to general issues and we concentrate on voices from community/grassroots level to shape our thinking, our startegies and our interventions. 
      4. Transperency and accountability: We ensure the existence of an enabling environment and make available, within our means, every resources and pooprtunities for all stakeholders of the Social Change Initiative to influence decision making, resource mobilization, allocation and disbursement, as well as own the outcomes of the programmes.
      5. Human rights: We committed to being a safe space where everyone is treated with dignity and respect at every level of our structures and the communities we serve and represent. We are guided by the Universal Declaration of Human Rights, the African Charter on Human and People's Rights and its Optional Protocol, the Convention on the Elimination of all forms of Discrimination Against Women, the Economic, Social and Cultural Rights Treaty, the International Convention on Civic and Political Rights. We are committed to a periodic review of our policies and strategic plans.
      6. Inter-sectionality: We are committed to an approach that tackles issues in an intersectional manner knowing that the individual is made up of several component of being that are interrelated amd mutually complimentary. Meaning that the malfunctioning of one component automatically ill disposes the person. We have the same approach to how we see populations. The intersectionalities approach establishes interconnectedness as a people. This is the reason why it is said that injustice to one is injustice to all. This approach does not suppress the autonomy and the right to choice.
      7. Equality and Non-Discrimination: (a)We believe that we are all born equal in rights and dignity. (b) Non-discrimination. This movement has zero tolerance to discrimination based on as sex, gender, age, perceived or actual sexual orientation, race, colour, ethnic or social origin, genetic features, language, religion or belief, disability, HIV, or marital status. This applies to within and outside the movement.
      The Manifesto development for us at the Social Movement Initiative is a process that upholds the above feminist principles. We are putting strutures in place to enable us capture and reflect our national ideals.
      This means that the content of the manifesto will be coming from all the support groups. The coordinating team will send the guidelines for contributions soon so that we can have standardized contributions. This means that we will all be contributing to the making of the manifesto.
      The manifesto is the property of the Social Movement Initiative.
      Everyone contesting election on the platform of the movement will be guided by and held accountable to the Manifesto of the Social Movement Initiative, its Policies and strategic plan.
      This applies to my candidature for the Presidency of the Federal Republic of Nigeria in 2023.
      Everyone Counts `
    },
    {
      title: 'Inada tambaya zuwaga Her excellency, idon kezama shugaban kasa a 2023. Wane tanadi keshiryawa wadanda basuyi karatun bokoba. Wane tallafi Zaki Basu?',
      content: `RESPONSE by Her Excellency  Cesnabmihilo Dorothy Nuhu-Aken'Ova : 
      When in office, we will have "Bridging the Gaps" intervention strategies deliberately put in place to identify areas where there is need to do more, in the spirit of equity, to bring areas of disparity resulting from discrimination based on gender to a close.
      Poor school erolment or withdrawal from school of the girl child for marriage and in some states, withdrawal of the male child for trading has created gender equality gaps that need to be righted as a matter of urgency.
      For this reason, those within school age will be enrolled into schools. The initiative will work with the communities affected to identify the incentive that will be provided to achieve 100% enrolment and return to school.
      Those above school age will enrol into special education programmes that will have a combination of literacy, numeracy, skills acquisition, human rights education, financial management.
      These institutions will have effective counselling departments for character building for development .`
    }
  ];

  return (
    <div>
      <h1 style={{width:"90%", margin:"auto"}}>Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
