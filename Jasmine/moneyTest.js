import { priceFormatting } from "../scripts/utils/money.js";

describe("Test suite:Format Currency!!!",()=>{
    it("Convert cents into currency",()=>
    {
        expect(priceFormatting(2065)).toEqual("20.65");
    });

    it("Edge case 1",()=>
    {
        expect(priceFormatting(2000.5)).toEqual("20.01");
    });

    it("Checking with zero",()=>
    {
        expect(priceFormatting(0)).toEqual("0.00");
    })


});
