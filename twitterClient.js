import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi({
  appKey: "8aOPZSuSVhKSAwVUZzep5nPfy",
  appSecret: "Ya2VFrTdYEyeScDka2jQbxOZyJRhHaEnbPGoJvSe9xO3AnrJik",
  accessToken: "1547390597287350274-MK58QhLhux1Xfo4qxXrRdyrOrD3Wyz",
  accessSecret: "kHCtmpbnaviKHlbT6keA2u7YpNeFuKI5pOdoP1GNLdh59",
});

const rwClient = client.readWrite;

export default rwClient;
