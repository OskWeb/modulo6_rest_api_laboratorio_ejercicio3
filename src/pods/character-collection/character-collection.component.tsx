import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { titleList } from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onEdit } = props;

  React.useEffect(() => {
    console.log(characterCollection);
  }, [characterCollection])

  return (
    <div className={classes.root}>
      <div className={titleList}>
        <h2>Listado personajes con GraphQL</h2>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
          <path fill="#e8457c" d="M24.5,44.661L7,34.32V13.68L24.5,3.339L42,13.68v20.64L24.5,44.661z M9,33.18l15.5,9.159L40,33.18	V14.82L24.5,5.661L9,14.82V33.18z"></path><circle cx="24.5" cy="5" r="4" fill="#e8457c"></circle><circle cx="24.5" cy="43" r="4" fill="#e8457c"></circle><circle cx="8.5" cy="33" r="4" fill="#e8457c"></circle><circle cx="40.5" cy="33" r="4" fill="#e8457c"></circle><circle cx="8.5" cy="15" r="4" fill="#e8457c"></circle><circle cx="40.5" cy="15" r="4" fill="#e8457c"></circle><path fill="#e8457c" d="M42.72,34.5H6.28L24.5,2.478L42.72,34.5z M9.72,32.5h29.56L24.5,6.522L9.72,32.5z"></path>
        </svg>
      </div>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
};
