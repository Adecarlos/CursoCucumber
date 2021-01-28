package br.ce.adecarlos.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		glue = "br.ce.adecarlos.steps",
		features = "src/test/resources/Features/cadastro_de_contas.feature",
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"}, 
		tags = {"~@ignore"},
		monochrome = true ,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerTest {
	
	@BeforeClass
	public static void reset() {
		System.setProperty("webdriver.chrome.driver", "/Users/adecarlos.junior/Documents/drivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com/");
		driver.findElement(By.id("email")).sendKeys("abc@abc");
		driver.findElement(By.id("senha")).sendKeys("abc");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}
}
