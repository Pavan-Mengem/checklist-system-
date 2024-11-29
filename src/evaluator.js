function evaluateRules(data, rules) {
    return rules.map((rule) => ({
        id: rule.id,
        description: rule.description,
        status: rule.check(data) ? 'Passed' : 'Failed',
    }));
}

module.exports = { evaluateRules };
