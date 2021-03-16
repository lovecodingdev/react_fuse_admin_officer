import { monthsAndQuarters, bonusPlanDbNames, policies, months, Options as options } from './Globals';
const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');

export const swap = (json) => {
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
}

export const ceil = (number) => {
  return Math.ceil(number * 100) / 100;
}

export const dividing = (n1, n2) => {
  return n1===0 || n2===0 ? 0 : n1/n2;
}

export const formattedDate = (date) => {
  var dd = date.getDate();
  var mm = date.getMonth()+1;//January is 0!`
  var yyyy = date.getFullYear();
  if(dd<10){dd='0'+dd}
  if(mm<10){mm='0'+mm}
  return mm+'/'+dd+'/'+yyyy;
}

export const getLevel =(policyCount, policyName, bonusPlans) => { 
  // console.log(policyCount, policyName, bonusPlans)
  let dbName = "";
  if(policyName==="Auto")
    dbName = "individualAutoTargetBonus";
  if(policyName==="TeamAuto") 
    dbName = "teamAutoTargetBonus";
  if(policyName==="Fire")
    dbName = "individualFireTargetBonus";
  if(policyName==="TeamFire")
    dbName = "teamFireTargetBonus";
  if(policyName==="Life")
    dbName = "individualLifeTargetBonus";
  if(policyName==="TeamLife") 
    dbName = "teamLifeTargetBonus";
  if(policyName==="Health")
    dbName = "individualHealthTargetBonus";
  if(policyName==="TeamHealth")
    dbName = "teamHealthTargetBonus";
  if(policyName==="Bank")
    dbName = "individualBankTargetBonus";
  if(policyName==="TeamBank")
    dbName = "teamBankTargetBonus";
  if(policyName==="Other")
    dbName = "otherActivityBonus";	

  let level = { 
    level: "", 
    policies: 0, 
    amount: 0, 
    nextLevel: "", 
    nextPolicies: 0, 
    nextAmount: 0, 
    maxLevel: "", 
    maxPolicies: 0, 
    maxAmount: 0 
  };
  let count = 0
  if(bonusPlans.length>0 && bonusPlans[0].hasOwnProperty(dbName)) {
    Object.keys(bonusPlans[0][dbName]).map((key, n) => {
      const item = bonusPlans[0][dbName][key];     
      if(policyCount > 0) {
        if(n===0) {
          level.level = "None Reached";
        }
        if(policyCount >= item.policies) { 
          level.level = item.level; 
          level.policies = item.policies;
          level.amount = item.amount;
          count ++;
        }	
        if(n === count) { 				
          level.nextLevel = item.level;
          level.nextPolicies = item.policies;
          level.nextAmount = item.amount;
        }	
        if(n === Object.keys(bonusPlans[0][dbName]).length-1) {
          level.maxLevel = item.level;
          level.maxPolicies = item.policies;
          level.maxAmount = item.amount;
          ;
        }
      }							
    });
  } 
  
  return level;
}

export const getOtherActivityBonus = (name, bonusPlans) => {
  if(bonusPlans.length>0 && bonusPlans[0].hasOwnProperty('otherActivityBonus')) {
    let value = 0;
    Object.keys(bonusPlans[0]['otherActivityBonus']).map((key, n) => {
      const item = bonusPlans[0]['otherActivityBonus'][key];      
      if(item.name === name) {console.log(item.name, name, item.dollar)
        value = item.dollar;
      }
    });
    return value;
  }
}

export const getMain = (entries, bonusPlans, marketings, users, vision) => {
  let temp = {};	
  const visionNames = {
    "Auto": "autoPolicies",
    "Fire": "firePolicies",
    "Life": "lifePolicies",
    "Health": "healthPolicies",
    "Bank": "bankProducts",
    "Totals": "totalProducts",
  };	
  options.production.data.map((pro) => {
    // user options
			// var tempUserList = [];
			// if (users.length > 0) {
			// 	users.map(user => {
			// 		if(user.belongTo === UID) {
			// 			tempUserList.push({ 
			// 				item: user.data.displayName, 
			// 				value: user.data.displayName 
			// 			});
			// 		}
			// 	});
			// 	setUserList(tempUserList);
			// }

    temp[pro.value] = {};
    monthsAndQuarters.map((month) => {				
      temp[pro.value][month.value] = {};
      users.map((user) => {
        let userOptions = { id: 'Users', data: [] };
        userOptions.data.push({ 
        	item: user.data.displayName, 
        	value: user.data.displayName 
        });

        temp[pro.value][month.value][user.data.displayName] = {};
        policies.map((policy) => {
          temp[pro.value][month.value][user.data.displayName][policy.value] = {
            "Bonuses": 0,
            "Premium": 0,
            "Policies": 0,
            "Averages": 0,
            "Goal": 0,
          };

          // adding marketing items
          Object.keys(marketings).map((key) => {
            const marketing = marketings[key];
            temp[pro.value][month.value][user.data.displayName][policy.value][marketing.marketingName] = 0;			
          }); 
          
          //adding bonusPlan items
          const bonusPlan = bonusPlans.length > 0 && 
          	bonusPlans[0].hasOwnProperty(bonusPlanDbNames[policy.value].db) ? 
          	bonusPlans[0][bonusPlanDbNames[policy.value].db] : 
          	{};				
          Object.keys(bonusPlan).map((key) => {		
          	const item = bonusPlan[key];
          	temp[pro.value][month.value][user.data.displayName][policy.value][item.name] = 0;
          	temp[pro.value][month.value][user.data.displayName][policy.value][`Bonuses`] = 0;
          	temp[pro.value][month.value][user.data.displayName][policy.value][`Premium`] = 0;
          	temp[pro.value][month.value][user.data.displayName][policy.value][`Policies`] = 0;
          	temp[pro.value][month.value][user.data.displayName][policy.value][`Averages`] = 0;

            temp[pro.value][month.value][user.data.displayName][policy.value][`${item.name}@Bonuses`] = 0;
            temp[pro.value][month.value][user.data.displayName][policy.value][`${item.name}@Premium`] = 0;
            temp[pro.value][month.value][user.data.displayName][policy.value][`${item.name}@Policies`] = 0;
            temp[pro.value][month.value][user.data.displayName][policy.value][`${item.name}@Averages`] = 0;
          });	

          // adding vision items
          if(vision.length > 0) {	
            let trimedMonth = month.value;
            switch(month.value) {
              case "Quarter 1 Totals":
                trimedMonth = "Quarter1";
              case "Quarter 2 Totals":
                trimedMonth = "Quarter2";
              case "Quarter 3 Totals":
                trimedMonth = "Quarter3";
              case "Quarter 4 Totals":
                trimedMonth = "Quarter4";	
              case "Annual Totals":
                trimedMonth = "Total";
              case "Projected for Year":
                trimedMonth = "Total";									
  
            }		
            if(vision[0].hasOwnProperty(user.id)) {
              temp[pro.value][month.value][user.data.displayName][policy.value]["Goals"] = 
                vision[0][user.id]['Goals'][trimedMonth][visionNames[policy.value]];
            }
            
          }
        });
          
      });						
    });

    if(entries.length > 0) {
      const entryNames = {
        "Entries": "Auto", 
        "FireEntries": "Fire", 
        "LifeEntries": "Life", 
        "HealthEntries": "Health", 
        "BankEntries": "Bank", 
        "OtherEntries": "Other"
      };

      users.map((user) => {
        const userName = user.data.displayName;
        Object.keys(entries[0]).map((entryName) => {
          if(entries[0][entryName].hasOwnProperty(user.id)) {
            Object.keys(entries[0][entryName][user.id]).map((key) => {
              const item = entries[0][entryName][user.id][key];
              const issuedMonth = (new Date(item.datePolicyIsIssued)).getMonth();
              const writtenMonth = (new Date(item.datePolicyIsWritten)).getMonth(); 
              const month = pro.value==="Show Written Production" ? months[writtenMonth].value : months[writtenMonth].value; 
              const bonus = item.datePolicyIsIssued===null || item.datePolicyIsIssued==='' ? 0 : ceil(parseFloat(item.dollarBonus));
              temp[pro.value][month][userName][entryNames[entryName]][item.typeOfProduct] += parseFloat(item.percentOfSaleCredit / 100);
              temp[pro.value][month][userName][entryNames[entryName]][item.sourceOfBusiness] += parseFloat(item.percentOfSaleCredit / 100);
              temp[pro.value][month][userName][entryNames[entryName]]["Bonuses"] += bonus;									
              temp[pro.value][month][userName][entryNames[entryName]]["Premium"] += ceil(parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * 2 / 100);									
              temp[pro.value][month][userName][entryNames[entryName]]["Policies"] += ceil(parseFloat(item.percentOfSaleCredit / 100));	
              temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Bonuses`] += ceil(parseFloat(item.dollarBonus));
              temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Premium`] += ceil(parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * 2 / 100);
              temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Policies`] +=ceil( parseFloat(item.percentOfSaleCredit / 100));	
              temp[pro.value][month][userName][entryNames[entryName]]["Averages"] = ceil(
                dividing(
                  temp[pro.value][month][userName][entryNames[entryName]]["Premium"],
                  temp[pro.value][month][userName][entryNames[entryName]]["Policies"]		
                )	
              )              
              temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Averages`] = ceil(
                dividing(
                  temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Premium`],
                  temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Policies`]		
                )
              )
            });
          }
        });	
      });	
    }
  });
  
  console.log('--------------------temp=', temp);
  return temp;
}
  