/**
 * IT IS DEFINITION FOR RSS FEED
 * If you want to get more feed, please add it
 **/
import { RSSItem } from "./index";

const BASE_URL = "https://davidwells.github.io/github-search-rss";
// Query references
// https://docs.github.com/en/github/searching-for-information-on-github/understanding-the-search-syntax
// https://docs.github.com/en/github/searching-for-information-on-github/about-searching-on-github
// TYPE references
// https://docs.github.com/en/graphql/reference/queries#searchresultitemconnection
export const SEARCH_ITEMS: RSSItem[] = [
    // Issue
    // {
    //     title: "w3ctag/design-reviews Design Issues",
    //     query: "repo:w3ctag/design-reviews is:issue",
    //     TYPE: "ISSUE",
    //     link: `${BASE_URL}/w3ctag-design-reviews.json`,
    //     homepage: "https://github.com/search?q=ActiveJob+Job+repo%3Arails%2Frails+is%3Aissue&type=Issues",
    // },
    // // Pull Request
    // {
    //     // label:data:
    //     title: "mdn/browser-compat-data update data",
    //     query: "repo:mdn/browser-compat-data is:pr is:open",
    //     TYPE: "ISSUE",
    //     link: `${BASE_URL}/mdn-browser-compat-data.json`,
    //     filter: (item) => {
    //         return item.labels.some((label) => label.startsWith("data:"));
    //     },
    //     homepage: "https://github.com/search?q=ActiveJob+Job+repo%3Arails%2Frails+is%3Aissue&type=Issues",
    // },
    // {
    //     // label:data:
    //     title: "mdn/content update content",
    //     query: "repo:mdn/content is:pr is:open",
    //     TYPE: "ISSUE",
    //     link: `${BASE_URL}/mdn-content.json`,
    //     homepage: "https://github.com/search?q=ActiveJob+Job+repo%3Arails%2Frails+is%3Aissue&type=Issues",
    // },
    // Repository
    {
        title: "Serverless repositories",
        query: "serverless language:javascript language:typescript sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/serverless-javascript-repo.json`,
        homepage:
            "https://github.com/search?o=desc&q=serverless+language%3Ajavascript+language%3Atypescript+sort%3Aupdated-desc&s=updated&type=Repositories"
    },
    {
        title: "LightWeight JavaScript repositories",
        query: "lightweight language:javascript language:typescript sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/lightweight-javascript-repo.json`,
        homepage:
            "https://github.com/search?o=desc&q=lightweight+language%3Ajavascript+language%3Atypescript+sort%3Aupdated-desc&s=updated&type=Repositories"
    },
    {
        title: "Saas repositories",
        query: "saas language:javascript language:typescript sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/saas-javascript-repo.json`,
        homepage:
            "https://github.com/search?o=desc&q=saas+language%3Ajavascript+language%3Atypescript+sort%3Aupdated-desc&s=updated&type=Repositories"
    },
    {
        title: "Analytics repositories",
        query: "analytics language:javascript language:typescript sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/analytics-javascript-repo.json`,
        homepage:
            "https://github.com/search?o=desc&q=analytics+language%3Ajavascript+language%3Atypescript+sort%3Aupdated-desc&s=updated&type=Repositories"
    },
    {
        title: "Cognito repositories",
        query: "cognito sort:updated-desc",
        TYPE: "REPOSITORY",
        link: `${BASE_URL}/cognito-javascript-repo.json`,
        homepage:
            "https://github.com/search?o=desc&q=analytics+language%3Ajavascript+language%3Atypescript+sort%3Aupdated-desc&s=updated&type=Repositories"
    }
];
