// Import the js file to test
import { isValidUrl } from "../urlChecker"

describe("isValidUrl", () => {
    test("it shows false boolean value for incorrect url", () => {
      const urls = ["htt", "wwx."];
  
      urls.forEach(url => {
        expect(isValidUrl(url)).toBeFalsy;
      });
    });
  
    test("this returns true boolean value for valid urls", () => {
      const urls = [
        "https://sumanth.netlify.app/wth-is-currying/",
        "http://example.com",
      ];
  
      urls.forEach(url => {
        expect(isValidUrl(url)).toBeTruthy;
      });
    });
  });
  