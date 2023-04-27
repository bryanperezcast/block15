/*speudocode
first we will create an object called customer and add key:value pairs for the keys- firstName, lastName, email, phone, zipCode, favoriteFlavors, cupSize, favoriteStore, firstVisit.
*/
let customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavor: 31,
    cupSize: "medium",
    favoriteStore: "target",
    firstVisit: false
};
/*speudocode
using bracket notation we will update the customer object,
change the email to jak3Smith1992@email.com
change the phone number to 3195551234
change the zipcode to 63132
change the favorite flavors to coffee, strawberry, and matcha.
we will do this by using 
(object[keyname] = newValue)
*/
customer["email"] = "jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = 63132;
customer["favoriteFlavor"] =  ["coffee", "strawberry", "matcha"];
/*speudocode
first we want to delete zipCode and favoriteStore from the customer object,
we will do this by using (delete (object)["key"])
after deleting the two keys we will want to add the new key: value pairs, toppings, futureFlavors, and todays purchase cost.
we will do this by using (object.key = value)
after that we will print the keys in our customer object by using console.log(Object.keys(objectname));
*/
delete customer["zipCode"];
delete customer["favoriteStore"];

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
console.log(Object.keys(customer));
