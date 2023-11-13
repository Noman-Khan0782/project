// {     #####Const#####
    {
        const v1 = "string";
        {
        console.log("V1",v1)
        const v2="string 2";
        console.log("V2",v2)
        // const v1="string3"; Error we connot reasign in const
        
        }
        // console.log("V1",v2)Error we cannot define const
        console.log("V1",v1)
        console.log("--------------------------------")
        }
// {     #####Let#####
{
    let v1 = "string";
    {
    // console.log("V1",v1) Error
    let v2="string 2";
    console.log("V2",v2)
    let v1="string3"; 
    
    }
    // console.log("V1",v2)Error we cannot define const
    console.log("V1",v1)
    }
