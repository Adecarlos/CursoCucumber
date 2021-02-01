package br.ce.adecarlos.runners;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;



@RunWith(Cucumber.class)
@CucumberOptions(
		glue = {"br.ce.adecarlos.steps","br.ce.adecarlos.config"},
		features = "src/test/resources/Features/",
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"}, 
		tags = {"@unitários"},
		monochrome = false ,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerTest {
	
}
