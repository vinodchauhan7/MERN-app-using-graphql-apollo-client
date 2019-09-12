import { gql } from "apollo-boost";

const getCarsQuery = gql`
  {
    cars {
      name
      id
    }
  }
`;

const getOwnersQuery = gql`
  {
    owners {
      name
      id
    }
  }
`;

const AddCarMutation = gql`
  mutation($name: String!, $model: Int!, $company: String!, $ownerId: ID!) {
    addCar(name: $name, model: $model, company: $company, ownerId: $ownerId) {
      name
      id
    }
  }
`;

const getCarQuery = gql`
  query($id: ID!) {
    car(id: $id) {
      id
      name
      model
      company
      owner {
        id
        name
        age
        cars {
          name
          company
          id
        }
      }
    }
  }
`;

export { getCarsQuery, getOwnersQuery, AddCarMutation, getCarQuery };
