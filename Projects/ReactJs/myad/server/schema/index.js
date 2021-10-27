const {gql} = require('apollo-server');
const typeDefs = gql`
    type Query{
        getAdvertiser(id:ID!): advertiser
        advertiser: advertiser
    }
    "Advertiser the default role"
    type advertiser {
        id: ID!
        "Name of the Advertiser"
        name: String!
        email: String!
        password: String!
        mobile: String!
        avgRating: Int!
        isBlocked: Boolean!
    }
`;
module.exports = typeDefs;