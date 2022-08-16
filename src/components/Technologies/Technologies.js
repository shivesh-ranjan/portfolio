import React from 'react';
import { DiAndroid, DiDatabase, DiDjango, DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the Machine Learning and Web Development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI & Deep Learning</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Tensorflow and Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDjango size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <ListParagraph>
            Full Stack <br />
            HTML, CSS, Django and JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile Applications</ListTitle>
          <ListParagraph>
            Front End Experience with <br />
            Android Studio and Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
