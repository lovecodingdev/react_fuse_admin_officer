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
  if(date==='' || isNaN(date)) {
    return '';
  } else {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;//January is 0!
    var yyyy = date.getFullYear();
    if(dd < 10) { dd = '0' + dd };
    if(mm < 10) { mm = '0' + mm };
    return mm + '/' + dd + '/' + yyyy;
  }
}

export const formattedString = (val) => {
  if(IsNumeric(val)) {
    return val===0 ? '' : ceil(val);
  } else {
    return val;
  }
}

export const IsNumeric = (input) => {
    return (input - 0) == input && (''+input).trim().length > 0;
}

export const getLevel =(policyCount, policyName, bonusPlans) => { 
  // console.log(policyCount, policyName, bonusPlans)
  let dbName = '';
  if(policyName==='Auto')
    dbName = 'individualAutoTargetBonus';
  if(policyName==='TeamAuto') 
    dbName = 'teamAutoTargetBonus';
  if(policyName==='Fire')
    dbName = 'individualFireTargetBonus';
  if(policyName==='TeamFire')
    dbName = 'teamFireTargetBonus';
  if(policyName==='Life')
    dbName = 'individualLifeTargetBonus';
  if(policyName==='TeamLife') 
    dbName = 'teamLifeTargetBonus';
  if(policyName==='Health')
    dbName = 'individualHealthTargetBonus';
  if(policyName==='TeamHealth')
    dbName = 'teamHealthTargetBonus';
  if(policyName==='Bank')
    dbName = 'individualBankTargetBonus';
  if(policyName==='TeamBank')
    dbName = 'teamBankTargetBonus';
  if(policyName==='Other')
    dbName = 'otherActivityBonus';	

  let level = { 
    level: '', 
    policies: 0, 
    amount: 0, 
    nextLevel: '', 
    nextPolicies: 0, 
    nextAmount: 0, 
    maxLevel: '', 
    maxPolicies: 0, 
    maxAmount: 0 
  };
  let count = 0
  if(bonusPlans.length>0 && bonusPlans[0].hasOwnProperty(dbName)) {
    Object.keys(bonusPlans[0][dbName]).map((key, n) => {
      const item = bonusPlans[0][dbName][key];     
      if(policyCount > 0) {
        if(n===0) {
          level.level = 'None Reached';
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

export const visionNames = {
  'Auto': 'autoPolicies',
  'Fire': 'firePolicies',
  'Life': 'lifePolicies',
  'Health': 'healthPolicies',
  'Bank': 'bankProducts',
  'Totals': 'totalProducts',
};

export const entryNames = {
  'Entries': 'Auto', 
  'FireEntries': 'Fire', 
  'LifeEntries': 'Life', 
  'HealthEntries': 'Health', 
  'BankEntries': 'Bank', 
  'OtherEntries': 'Other'
};

// Getting  main data
export const getMain = (entries, bonusPlans, marketings, users, vision, lapseRate) => {
  let temp = {};	
  options.production.data.map((pro) => {  
    const production = pro.value;
    temp[production] = {};
    monthsAndQuarters.map((month) => {				
      temp[production][month.value] = {};
      users.map((user) => {
        const userId = user.id;
        temp[production][month.value][userId] = {};
        policies.map((pol) => {
          const policy = pol.value;
          temp[production][month.value][userId][policy] = {
            'Bonuses': 0,
            'Premium': 0,
            'Policies': 0,
            'Averages': 0,
            'household': 0,
            'individual': 0,
            'lapseRate': 0,
            'Goals': 0,
          };

          // adding marketing items
          Object.keys(marketings).map((key) => {
            const marketing = marketings[key];
            temp[production][month.value][userId][policy][marketing.marketingName] = 0;			
          }); 
          
          //adding bonusPlan items
          const bonusPlan = bonusPlans.length > 0 &&	bonusPlans[0].hasOwnProperty(bonusPlanDbNames[policy].db) ?	bonusPlans[0][bonusPlanDbNames[policy].db] : {};				
          Object.keys(bonusPlan).map((key) => {		
          	const item = bonusPlan[key];
          	temp[production][month.value][userId][policy][item.name] = 0;
            temp[production][month.value][userId][policy][`${item.name}@Bonuses`] = 0;
            temp[production][month.value][userId][policy][`${item.name}@Premium`] = 0;
            temp[production][month.value][userId][policy][`${item.name}@Policies`] = 0;
            temp[production][month.value][userId][policy][`${item.name}@Averages`] = 0;
          });	

          //  adding lapseRate items
          const lapse = lapseRate.length > 0 &&	
          lapseRate[0].hasOwnProperty(policy) && 
          lapseRate[0][policy].hasOwnProperty(month.value) ? 
          lapseRate[0][policy][month.value]['previousMonth']['value'] : 0;				
          temp[production][month.value][userId][policy]['lapseRate'] = lapse;      
          
          // adding vision items
          if(vision.length > 0) {	           	
            if(vision[0].hasOwnProperty(userId)) {
              temp[production][month.value][userId][policy]['Goals'] = 
                vision[0][userId]['Goals'][month.visionValue][visionNames[policy]];                 
            }            
          }
        });          
      });						
    });

    if(entries.length > 0) {
      users.map((user) => {
        const userId = user.id;
        Object.keys(entries[0]).map((entry) => {
          const policy = entryNames[entry];
          if(entries[0][entry].hasOwnProperty(userId)) {
            Object.keys(entries[0][entry][userId]).map((key) => {
              const item = entries[0][entry][userId][key];              
              const writtenMonth = (new Date(item.datePolicyIsWritten)).getMonth(); 
              const issuedMonth = item.datePolicyIsIssued==='' ? '' : (new Date(item.datePolicyIsIssued)).getMonth();               
              if(production==='Show Issued Production' && issuedMonth === '') {                
                return;
              }            
              const month = production==='Show Written Production' ? months[writtenMonth].value : months[issuedMonth].value;
              const semiAnnual = policy==='Auto' ? 2 : 1;
              const bonus = item.dollarBonus==='' ? 0 : item.dollarBonus;              
              temp[production][month][userId][policy][item.typeOfProduct] += parseFloat(item.percentOfSaleCredit / 100);
              temp[production][month][userId][policy][item.sourceOfBusiness] += parseFloat(item.percentOfSaleCredit / 100);              
              temp[production][month][userId][policy][item.policyHolderType] += 1;
              temp[production][month][userId][policy]['Bonuses'] += parseFloat(bonus);									
              temp[production][month][userId][policy]['Premium'] += parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * semiAnnual / 100;									
              temp[production][month][userId][policy]['Policies'] += parseFloat(item.percentOfSaleCredit / 100);	
              temp[production][month][userId][policy]['Averages'] = dividing(temp[production][month][userId][policy]['Premium'], temp[production][month][userId][policy]['Policies'])              
              temp[production][month][userId][policy][`${item.typeOfProduct}@Bonuses`] += parseFloat(bonus);
              temp[production][month][userId][policy][`${item.typeOfProduct}@Premium`] += parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * semiAnnual / 100;
              temp[production][month][userId][policy][`${item.typeOfProduct}@Policies`] += parseFloat(item.percentOfSaleCredit / 100);	              
              temp[production][month][userId][policy][`${item.typeOfProduct}@Averages`] = dividing(temp[production][month][userId][policy][`${item.typeOfProduct}@Premium`], temp[production][month][userId][policy][`${item.typeOfProduct}@Policies`])              

              for(let i = 0; i < 4; i ++) {
                temp[production][`Quarter ${i+1} Totals`][userId][policy][item.typeOfProduct] = 
                  temp[production][months[i*3].value][userId][policy][item.typeOfProduct] +
                  temp[production][months[i*3+1].value][userId][policy][item.typeOfProduct] +
                  temp[production][months[i*3+2].value][userId][policy][item.typeOfProduct];
                temp[production][`Quarter ${i+1} Totals`][userId][policy][item.sourceOfBusiness] = 
                  temp[production][months[i*3].value][userId][policy][item.sourceOfBusiness] +
                  temp[production][months[i*3+1].value][userId][policy][item.sourceOfBusiness] +
                  temp[production][months[i*3+2].value][userId][policy][item.sourceOfBusiness];
                temp[production][`Quarter ${i+1} Totals`][userId][policy][item.policyHolderType] = 
                  temp[production][months[i*3].value][userId][policy][item.policyHolderType] +
                  temp[production][months[i*3+1].value][userId][policy][item.policyHolderType] +
                  temp[production][months[i*3+2].value][userId][policy][item.policyHolderType];
                temp[production][`Quarter ${i+1} Totals`][userId][policy]['Bonuses'] = 
                  temp[production][months[i*3].value][userId][policy]['Bonuses'] +
                  temp[production][months[i*3+1].value][userId][policy]['Bonuses'] +
                  temp[production][months[i*3+2].value][userId][policy]['Bonuses'];
                temp[production][`Quarter ${i+1} Totals`][userId][policy]['Premium'] = 
                  temp[production][months[i*3].value][userId][policy]['Premium'] +
                  temp[production][months[i*3+1].value][userId][policy]['Premium'] +
                  temp[production][months[i*3+2].value][userId][policy]['Premium'];
                temp[production][`Quarter ${i+1} Totals`][userId][policy]['Policies'] = 
                  temp[production][months[i*3].value][userId][policy]['Policies'] +
                  temp[production][months[i*3+1].value][userId][policy]['Policies'] +
                  temp[production][months[i*3+2].value][userId][policy]['Policies'];
                temp[production][`Quarter ${i+1} Totals`][userId][policy]['Averages'] = dividing(
                  temp[production][`Quarter ${i+1} Totals`][userId][policy]['Premium'], 
                  temp[production][`Quarter ${i+1} Totals`][userId][policy]['Policies']
                );
              } 
              temp[production][`Annual Totals`][userId][policy][item.typeOfProduct] =   
                temp[production][`Quarter 1 Totals`][userId][policy][item.typeOfProduct] +
                temp[production][`Quarter 2 Totals`][userId][policy][item.typeOfProduct] +
                temp[production][`Quarter 3 Totals`][userId][policy][item.typeOfProduct] +
                temp[production][`Quarter 4 Totals`][userId][policy][item.typeOfProduct];  
              temp[production][`Annual Totals`][userId][policy][item.sourceOfBusiness] =   
                temp[production][`Quarter 1 Totals`][userId][policy][item.sourceOfBusiness] +
                temp[production][`Quarter 2 Totals`][userId][policy][item.sourceOfBusiness] +
                temp[production][`Quarter 3 Totals`][userId][policy][item.sourceOfBusiness] +
                temp[production][`Quarter 4 Totals`][userId][policy][item.sourceOfBusiness];  
              temp[production][`Annual Totals`][userId][policy][item.policyHolderType] =   
                temp[production][`Quarter 1 Totals`][userId][policy][item.policyHolderType] +
                temp[production][`Quarter 2 Totals`][userId][policy][item.policyHolderType] +
                temp[production][`Quarter 3 Totals`][userId][policy][item.policyHolderType] +
                temp[production][`Quarter 4 Totals`][userId][policy][item.policyHolderType];  
              temp[production][`Annual Totals`][userId][policy]['Bonuses'] =  
                temp[production][`Quarter 1 Totals`][userId][policy]['Bonuses'] +
                temp[production][`Quarter 2 Totals`][userId][policy]['Bonuses'] +
                temp[production][`Quarter 3 Totals`][userId][policy]['Bonuses'] +
                temp[production][`Quarter 4 Totals`][userId][policy]['Bonuses'];
              temp[production][`Annual Totals`][userId][policy]['Premium'] =  
                temp[production][`Quarter 1 Totals`][userId][policy]['Premium'] +
                temp[production][`Quarter 2 Totals`][userId][policy]['Premium'] +
                temp[production][`Quarter 3 Totals`][userId][policy]['Premium'] +
                temp[production][`Quarter 4 Totals`][userId][policy]['Premium'];
              temp[production][`Annual Totals`][userId][policy]['Policies'] =  
                temp[production][`Quarter 1 Totals`][userId][policy]['Policies'] +
                temp[production][`Quarter 2 Totals`][userId][policy]['Policies'] +
                temp[production][`Quarter 3 Totals`][userId][policy]['Policies'] +
                temp[production][`Quarter 4 Totals`][userId][policy]['Policies'];
              temp[production][`Annual Totals`][userId][policy]['Averages'] = dividing(
                temp[production][`Annual Totals`][userId][policy]['Premium'],
                temp[production][`Annual Totals`][userId][policy]['Policies']
              ); 
            });
          }
        });	
      });	
    }
  });
  
  console.log('--------------------temp=', temp);
  return temp;
}
  