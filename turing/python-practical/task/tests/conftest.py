
# DO  NOT MAKE ANY CHANGES TO THIS FILE

import time
import json


def pytest_terminal_summary(terminalreporter):
    test_cases = []
    failed = 0
    passed = 0
    for failed_tests in terminalreporter.stats.get('failed', []):
      if 'hidden.py' in failed_tests.nodeid:
        failed = failed + 1
        test_cases.append({ "title": failed_tests.nodeid, "status": "failed" })

    for passed_tests in terminalreporter.stats.get('passed', []):
      if 'hidden.py' in passed_tests.nodeid:
        passed = passed + 1
        test_cases.append({ "title": passed_tests.nodeid, "status": "passed" })

    total = failed + passed
    print('total test cases:', total)
    print('passed test cases:', passed)
    print('failed test cases:', failed)
    print('\n')
    generate_json_report(test_cases)


def generate_json_report(reports):
   search_string = "ValidatorTest::"
   for report in reports:
      original_title = report.get("title", "")
      search_index = original_title.find(search_string)

      report["title"] = original_title[search_index + len(search_string):]
      reportJson = json.dumps(report);

      print('===>TC', reportJson , 'TC<===')