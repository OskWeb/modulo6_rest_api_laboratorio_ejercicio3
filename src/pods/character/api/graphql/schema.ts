export const schema = `
  query getCharacter($id: ID!) {
   character(id: $id) {
      	id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          id
        }
        created
      }
    }
`;
