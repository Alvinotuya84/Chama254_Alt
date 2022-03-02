import DashBoard from "../../../screens/MainScreens/DashBoard";
import MyAttendance from "../../../screens/MainScreens/MyAttendance";
import MyContributions from "../../../screens/MainScreens/MyContributions";
import MyFines from "../../../screens/MainScreens/MyFines";
import MyLoans from "../../../screens/MainScreens/MyLoans";
import MyPayments from "../../../screens/MainScreens/MyPayments";
import OurInvestments from "../../../screens/MainScreens/OurInvestements";
import OurMinutes from "../../../screens/MainScreens/OurMinutes";
import OurStandingPayments from "../../../screens/MainScreens/OutStandingPayments";




export const mainScreens=[
    {
        name:'Dashboard',
        component:DashBoard
        
    },
    {
        name:'MyAttendance',
        component:MyAttendance
        
    },
    {
        name:'MyContributions',
        component:MyContributions
        
    },
    {
        name:'MyFines',
        component:MyFines
        
    },
    {
        name:'MyLoans',
        component:MyLoans
        
    },
   {
        name:'MyPayments',
        component:MyPayments
        
    },    {
        name:'OurInvestments',
        component:OurInvestments
        
    },
    {
        name:'OurMinutes',
        component:OurMinutes
        
    }, {
        name:'OurStandingPayments',
        component:OurStandingPayments
        
    },
  
]