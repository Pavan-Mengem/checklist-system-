const { fetchApplicationData } = require('./api');
const { rules } = require('./rules');
const { evaluateRules } = require('./evaluator');
const { startDashboard } = require('./dashboard');

async function main() {
    const data = await fetchApplicationData();
    if (!data) {
        console.error('Failed to fetch data. Exiting.');
        return;
    }

    const evaluationResults = evaluateRules(data, rules);
    console.log('Evaluation Results:', evaluationResults);

    startDashboard(evaluationResults);
}

main();
