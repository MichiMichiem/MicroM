/* eslint-disable */
class TreeClass {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
   
    addChild (value) {
      const newChild = new TreeClass(value);
      this.children.push(newChild);
    }
   
    contains (target) {
     let doesContain = false;
     function recurse(cur) {
       if (cur.value == target || JSON.stringify(cur.value) == JSON.stringify(target)) {
         doesContain = true;
       } else {
         for (let i=0;i < cur.children.length;i+=1) {
           if (cur.children[i].value == target || JSON.stringify(cur.children[i].value) == JSON.stringify(target)) {
             doesContain = true;
           }
           if (cur.children[i].children.length > 0) {
             recurse(cur.children[i]);
           }
         }
       }
     };
     recurse(this);
     let retval = false;
     if (doesContain === true) {
       retval = true;
     };
     return retval;
    };
   
   containsId (target) {
     let doesContain = false;
     function recurse(cur) {
       let matchId = false;
       if (typeof cur.value == "object") {
         Object.values(cur.value).forEach((item, i) => {
           if (item == target && i === 0) {
             matchId = true;
           }
         })
       }
       if (cur.value == target || JSON.stringify(cur.value) == JSON.stringify(target) || matchId) {
         doesContain = true;
       } else {
         for (let i=0;i < cur.children.length;i+=1) {
           if (typeof cur.children[i].value == "object") {
             Object.values(cur.children[i].value).forEach((item, i) => {
               if (item == target && i === 0) {
                 matchId = true;
               }
             })
           }
           if (cur.children[i].value == target || JSON.stringify(cur.children[i].value) == JSON.stringify(target) || matchId) {
             doesContain = true;
           }
           if (cur.children[i].children.length > 0) {
             recurse(cur.children[i]);
           }
         }
       }
     };
     recurse(this);
     let retval = false;
     if (doesContain === true) {
       retval = true;
     };
     return retval;
    };
   
   getNode (target) {
     let doesContain = false;
     let retVal;
     function recurse(cur) {
       if (cur.value == target || JSON.stringify(cur.value) == JSON.stringify(target)) {
         doesContain = true;
         retVal = cur;
       } else {
         for (let i=0;i < cur.children.length;i+=1) {
           if (cur.children[i].value == target || JSON.stringify(cur.children[i].value) == JSON.stringify(target)) {
             doesContain = true;
             retVal = cur.children[i];
           }
           if (cur.children[i].children.length > 0) {
             recurse(cur.children[i]);
           }
         }
       }
     };
     recurse(this);
     if (doesContain === true) {
       return retVal;
     };
   }
   
   getNodeById (target) {
     let doesContain = false;
     let retVal;
     function recurse(cur) {
       let matchId = false;
       let keys = Object.keys(cur.value)
       if (typeof cur.value == "object") {
         Object.values(cur.value).forEach((item, i) => {
           if (item === target && keys[i] === "section_id") {
             matchId = true;
           }
         })
       }
       if (matchId) {
         doesContain = true;
         retVal = cur;
         matchId = false;
       } else {
         for (let i=0;i < cur.children.length;i+=1) {
           let keys = Object.keys(cur.children[i].value)
           if (typeof cur.children[i].value == "object") {
             Object.values(cur.children[i].value).forEach((item, i) => {
               if (item === target && keys[i] === "section_id") {
                 matchId = true;
               }
             })
           }
           if (matchId) {
             doesContain = true;
             retVal = cur.children[i];
             matchId = false;
           }
           if (cur.children[i].children.length > 0) {
             recurse(cur.children[i]);
           }
         }
       }
     };
     recurse(this);
     if (doesContain === true) {
       return retVal;
     };
    };
  };
 export default TreeClass;
