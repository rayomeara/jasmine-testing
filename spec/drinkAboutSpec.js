describe("Drink About tests", function() {
    it("should return Sorry message", function() {
        expect(drinkAbout(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        expect(drinkAbout(150)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        expect(drinkAbout("Hello")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });
    it("should return Toddy message", function() {
        expect(drinkAbout(7)).toBe("Drink Toddy");
    }); 
    it("should return Coke message" + 
        "numbers", function() {
        expect(drinkAbout(16)).toBe("Drink Coke");
    });
    it("should return Beer message" + 
        "numbers", function() {
        expect(drinkAbout(20)).toBe("Drink Beer");
    });
    it("should return Whiskey message" + 
        "numbers", function() {
        expect(drinkAbout(45)).toBe("Drink Whiskey");
    });
});
