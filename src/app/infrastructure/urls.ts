import { environment } from "src/environments/environment";

export class URLs 
{
    public static ApiUrl: string = environment.ApiUrl;

    public static get User() {
        const pref = `${URLs.ApiUrl}/Users`;
        
        return {  
         Login: `${pref}/Login`,
         Register: `${pref}/Register`,
        };
    }
    public static get Restoran() {
        const pref = `${URLs.ApiUrl}/Restoran`;
        
        return {  
          ListaRestorana: `${pref}/ListaRestorana` 
        };
    }
}