
function __t(key: string, message: string): string { return message }


function example_function()
{
    const s = __t("test", "This is a test message");
    const s2 = __t("test2", "This is yet more test text to see if this works"); 
}