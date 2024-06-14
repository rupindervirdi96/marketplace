export namespace AuthModels {
  export enum AuthType {
    "SignIn",
    "SignUp",
  }

  export class User {
    "id": string;
    "name": string;
    "memberSince": string;
    constructor(id: string, name: string, memberSince: string) {
      this.id = id;
      this.name = name;
      this.memberSince = memberSince;
    }
  }
}
