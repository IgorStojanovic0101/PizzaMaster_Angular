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
    public static get Admin() {
        const pref = `${URLs.ApiUrl}/Admin`;
        
        return {  
            SetAdminData: `${pref}/SetAdminData` 
        };
    }

    public static get Home() {
        const pref = `${URLs.ApiUrl}/Home`;
        return {  
            GetHomeDescription: `${pref}/GetHomeDescription` 
          };
    }
}