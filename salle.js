class salle {
    constructor(capacité , numsalle , listeSéance ){
        this.capacité=capacité ; 
        this.numsalle =numsalle ; 
        this.listeSéance = listeSéance ; 
    } 
    
    getcapacité (){
        return this.capacité ; 
    }
    getnumsalle (){
        return this.numsalle ; 
    }
    getlisteSéance (){
        return this.listeSéance ; 
    }

}