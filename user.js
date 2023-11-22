class user {
    constructor(user_id,email,nom,prenom,role)
    {
    this.user_id=user_id ;
    this.email=email;
    this.nom=nom;
    this.prenom=prenom;
    this.role=role;
    }

    getrole() {
        return this.role;
      }
      getnom(){
          return this.nom ; 
      }
      
      getprenom(){
          return this.prenom ; 
      }
      
      getemail (){
          return this.email ; 
      }

      getuser_id(){
          return this.user_id;
      }
     
}