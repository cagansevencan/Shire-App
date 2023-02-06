class Practices extends BusinessDetails {
    constructor() {
        this._categories = {
            RegenerativeFarming,
            Biodynamic,
            CertifiedOrganic,
            GrassFed,
            PastureRaised,
            NonGMO,
            GlyphosateFree,
            PesticideFree,
            SeedOilFree,
            ChemicalFree,
            TapWaterFree,
            FarmToTable,
            OrganicMethods
        };
    }

    get categories() {
        return this._categories;
    }
}
module.exports = new Practices();