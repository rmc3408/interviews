/**
 * Importing data.json file to USERS
 */
const USERS = require("./data.json");

/**
 * Importing mingo.
 * @TODO: Ensure you run `npm install` in your system.
 */
const mingo = require("mingo");

/**
 * 1. Write a function to return only users who do bookkeeping services. (Bookkeeping services
 * is an industry activity.)
 */
function userFromBookingServices() {
  // Enter criteria (i.e { key: { operator: value }}) for searching proposal.
  const criteria = { industryActivities: { $eq: "BookkeepingServices" } };

  // create a query with criteria
  const industryQuery = new mingo.Query(criteria);

  //Query the criteria using query language for in-memory objects and saved in a cursor
  const cursor = industryQuery.find(USERS).limit();

  //retrieve all matched objects, move to final cursor and return the all users selected.
  // Expected results is to show 13 users.
  return cursor.all();
}

/**
 * 2. Write a function to return users who do bookkeeping services or review engagements,
 * but not tax return preparation.
 */
function usersBookReviewNotTax() {
  // Enter criterias (i.e { key: { operator: value }}) for searching proposal.
  const criteria1 = { industryActivities: { $eq: "BookkeepingServices" } };
  const criteria2 = { industryActivities: { $eq: "ReviewEngagements" } };
  const criteria3 = { industryActivities: { $not: "TaxReturnPreparation" } };

  /**
   *  To find users who do bookkeeping services or review engagements, use criteria 1 and 2.
   *  $or  = OR operator
   *  BUT should be done using $and operator and $not operator
   *  not tax return preparation, uses variable Criteria3
   */
  const industryQuery = new mingo.Query({ $and: [{ $or: [criteria1, criteria2] }, criteria3] });

  //Get all query from in-memory object USER and save to cursor
  let cursor = industryQuery.find(USERS).limit();

  //retrieve all matched objects, move to final cursor and return the all users selected.
  // Return 10 users.
  return cursor.all();
}
//console.log(usersBookReviewNotTax());

/**
 * 3. Using JSON, create a schema to represent the following three questions:
 *
 * What is your primary industry?
 * a) legal / financial
 * b) restaurants
 * c) construction contractor
 *
 * Which of the following services do you offer? Select all that apply.
 * a) Bookkeeping Services
 * b) Tax Return Preparation (Personal or Corporate)
 * c) Review Engagements
 *
 * Do you do any work outside of Canada? (yes/no)
 */

const questions = [
  {
    // schema definition in 2 lines
    $schema: "http://json-schema.org/draft-04/schema#",
    type: "object",
    // the properties use to validate type and items type and required to determine which is must be presence in all JSON
    properties: {
      primaryIndustry: {
        // primary industry can allow to tag as any of these 3 options type string.
        type: "array",
        items: [
          {
            type: "string",
          },
          {
            type: "string",
          },
          {
            type: "string",
          },
        ],
      },
      servicesOffer: {
        // Services Offered will be choosen as True or False (YES or NO) as Boolean
        type: "object",
        properties: {
          BookkeepingService: {
            type: "boolean",
          },
          TaxReturnPreparation: {
            type: "object",
            properties: {
              Personal: {
                type: "boolean",
              },
              Corporate: {
                type: "boolean",
              },
            },
            required: ["Personal", "Corporate"],
          },
          ReviewEngagements: {
            type: "boolean",
          },
        },
        required: [
          "BookkeepingService",
          "TaxReturnPreparation",
          "ReviewEngagements",
        ],
      },
      worksOutsideOfCanada: {
        // WorksOutsideCanada will be choosen as True or False (YES or NO) as Boolean
        type: "boolean",
      },
    },
    required: ["primaryIndustry", "servicesOffer", "worksOutsideOfCanada"],
  },
];
