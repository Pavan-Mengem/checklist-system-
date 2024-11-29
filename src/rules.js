const rules = [
    {
        id: 'valuationFeePaid',
        description: 'Valuation Fee Paid',
        check: (data) => data.isValuationFeePaid === true,
    },
    {
        id: 'ukResident',
        description: 'UK Resident',
        check: (data) => data.isUkResident === true,
    },
    {
        id: 'riskRatingMedium',
        description: 'Risk Rating Medium',
        check: (data) => data.riskRating === 'Medium',
    },
    {
        id: 'ltvBelow60',
        description: 'LTV Below 60%',
        check: (data) => {
            const ltv = (data.loanRequired / data.purchasePrice) * 100;
            return ltv < 60;
        },
    },
];

module.exports = { rules };
