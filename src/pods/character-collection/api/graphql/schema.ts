export const schema = `
  query {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
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
  }
`;
