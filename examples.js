window.REEHAA_EXAMPLES = {
  "schema_version": 3,
  "categories": [
    {
      "id": 1,
      "name": "Steel-sheet roof building",
      "color": "#EB3949"
    },
    {
      "id": 2,
      "name": "Greenhouse",
      "color": "#2A9D8F"
    },
    {
      "id": 3,
      "name": "Dust-proof net",
      "color": "#457B9D"
    },
    {
      "id": 4,
      "name": "Plastic mulch",
      "color": "#F4A261"
    }
  ],
  "overview": {
    "input": "assets/overview-example/input.png",
    "task1": "assets/overview-example/task1.png",
    "task2": "assets/overview-example/task2.png",
    "prompts": {
      "task1": "This is a UAV orthophoto. Please perform Instance Segmentation. Here are all the candidate categories: Color-Coated Steel Sheet Roof Building, Greenhouse, Dust-Proof Net, Plastic Mulch, Background.",
      "task2": "This is a UAV orthophoto. Which Color-Coated Steel Sheet Roof Building instances in this area should be addressed as a priority?\nPlease segment the instances that satisfy the following conditions:\nCondition 1 aging: Appears as overall faded, whitish, or dull colors.\nCondition 2 rust: Clustered or scattered red-brown or dark red rust patches ...\nCondition 3 damage: Appears as dark holes, missing panels or structural breaks ..."
    }
  },
  "examples": [
    {
      "id": "task1-original-19623",
      "task": "task1",
      "dataset": "original",
      "row": 1,
      "title": "Example 01",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-original-19623/input.webp",
        "output": "assets/examples/task1-original-19623/reehaa.webp"
      }
    },
    {
      "id": "task1-original-67707",
      "task": "task1",
      "dataset": "original",
      "row": 2,
      "title": "Example 02",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-original-67707/input.webp",
        "output": "assets/examples/task1-original-67707/reehaa.webp"
      }
    },
    {
      "id": "task1-original-75823",
      "task": "task1",
      "dataset": "original",
      "row": 3,
      "title": "Example 03",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-original-75823/input.webp",
        "output": "assets/examples/task1-original-75823/reehaa.webp"
      }
    },
    {
      "id": "task1-original-81519",
      "task": "task1",
      "dataset": "original",
      "row": 4,
      "title": "Example 04",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-original-81519/input.webp",
        "output": "assets/examples/task1-original-81519/reehaa.webp"
      }
    },
    {
      "id": "task1-original-84183",
      "task": "task1",
      "dataset": "original",
      "row": 5,
      "title": "Example 05",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-original-84183/input.webp",
        "output": "assets/examples/task1-original-84183/reehaa.webp"
      }
    },
    {
      "id": "task1-original-88283",
      "task": "task1",
      "dataset": "original",
      "row": 6,
      "title": "Example 06",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-original-88283/input.webp",
        "output": "assets/examples/task1-original-88283/reehaa.webp"
      }
    },
    {
      "id": "task2-original-46440_priority_cat1",
      "task": "task2",
      "dataset": "original",
      "row": 1,
      "title": "Steel-sheet roof building",
      "query": "Which instances of color-coated steel sheet roof buildings in this area should be prioritized?",
      "paths": {
        "input": "assets/examples/task2-original-46440_priority_cat1/input.webp",
        "output": "assets/examples/task2-original-46440_priority_cat1/reehaa.webp"
      }
    },
    {
      "id": "task2-original-61360_priority_cat2",
      "task": "task2",
      "dataset": "original",
      "row": 2,
      "title": "Greenhouse",
      "query": "Which instances of greenhouses in this area should be prioritized?",
      "paths": {
        "input": "assets/examples/task2-original-61360_priority_cat2/input.webp",
        "output": "assets/examples/task2-original-61360_priority_cat2/reehaa.webp"
      }
    },
    {
      "id": "task2-original-55507_priority_cat3",
      "task": "task2",
      "dataset": "original",
      "row": 3,
      "title": "Dust-proof net",
      "query": "Which instances of dust-proof nets in this area should be prioritized?",
      "paths": {
        "input": "assets/examples/task2-original-55507_priority_cat3/input.webp",
        "output": "assets/examples/task2-original-55507_priority_cat3/reehaa.webp"
      }
    },
    {
      "id": "task2-original-19470_priority_cat4",
      "task": "task2",
      "dataset": "original",
      "row": 4,
      "title": "Plastic mulch",
      "query": "Which instances of plastic mulch in this area should be prioritized?",
      "paths": {
        "input": "assets/examples/task2-original-19470_priority_cat4/input.webp",
        "output": "assets/examples/task2-original-19470_priority_cat4/reehaa.webp"
      }
    },
    {
      "id": "task1-cross-region-91",
      "task": "task1",
      "dataset": "cross-region",
      "row": 1,
      "title": "Example 01",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-dji-91/input.webp",
        "output": "assets/examples/task1-dji-91/reehaa.webp"
      }
    },
    {
      "id": "task1-cross-region-212",
      "task": "task1",
      "dataset": "cross-region",
      "row": 2,
      "title": "Example 02",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-dji-212/input.webp",
        "output": "assets/examples/task1-dji-212/reehaa.webp"
      }
    },
    {
      "id": "task1-cross-region-269",
      "task": "task1",
      "dataset": "cross-region",
      "row": 3,
      "title": "Example 03",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-dji-269/input.webp",
        "output": "assets/examples/task1-dji-269/reehaa.webp"
      }
    },
    {
      "id": "task1-cross-region-594",
      "task": "task1",
      "dataset": "cross-region",
      "row": 4,
      "title": "Example 04",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-dji-594/input.webp",
        "output": "assets/examples/task1-dji-594/reehaa.webp"
      }
    },
    {
      "id": "task1-cross-region-672",
      "task": "task1",
      "dataset": "cross-region",
      "row": 5,
      "title": "Example 05",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-dji-672/input.webp",
        "output": "assets/examples/task1-dji-672/reehaa.webp"
      }
    },
    {
      "id": "task1-cross-region-690",
      "task": "task1",
      "dataset": "cross-region",
      "row": 6,
      "title": "Example 06",
      "query": "",
      "paths": {
        "input": "assets/examples/task1-dji-690/input.webp",
        "output": "assets/examples/task1-dji-690/reehaa.webp"
      }
    },
    {
      "id": "task2-cross-region-86_priority_cat1",
      "task": "task2",
      "dataset": "cross-region",
      "row": 1,
      "title": "Steel-sheet roof building",
      "query": "Which instances of color-coated steel sheet roof buildings in this area should be prioritized?",
      "paths": {
        "input": "assets/examples/task2-dji-86_priority_cat1/input.webp",
        "output": "assets/examples/task2-dji-86_priority_cat1/reehaa.webp"
      }
    },
    {
      "id": "task2-cross-region-975_priority_cat2",
      "task": "task2",
      "dataset": "cross-region",
      "row": 2,
      "title": "Greenhouse",
      "query": "Which instances of greenhouses in this area should be prioritized?",
      "paths": {
        "input": "assets/examples/task2-dji-975_priority_cat2/input.webp",
        "output": "assets/examples/task2-dji-975_priority_cat2/reehaa.webp"
      }
    },
    {
      "id": "task2-cross-region-885_priority_cat3",
      "task": "task2",
      "dataset": "cross-region",
      "row": 3,
      "title": "Dust-proof net",
      "query": "Which instances of dust-proof nets in this area should be prioritized?",
      "paths": {
        "input": "assets/examples/task2-dji-885_priority_cat3/input.webp",
        "output": "assets/examples/task2-dji-885_priority_cat3/reehaa.webp"
      }
    },
    {
      "id": "task2-cross-region-380_priority_cat4",
      "task": "task2",
      "dataset": "cross-region",
      "row": 4,
      "title": "Plastic mulch",
      "query": "Which instances of plastic mulch in this area should be prioritized?",
      "paths": {
        "input": "assets/examples/task2-dji-380_priority_cat4/input.webp",
        "output": "assets/examples/task2-dji-380_priority_cat4/reehaa.webp"
      }
    }
  ]
};
