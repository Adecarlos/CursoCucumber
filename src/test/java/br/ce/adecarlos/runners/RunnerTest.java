package br.ce.adecarlos.runners;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		glue = "br.ce.adecarlos.steps",
		features = "src/test/resources/Features/cadastro_de_contas.feature",
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"}, 
		tags = {"~@ignore"},
		monochrome = false,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerTest {

}
