# Crave


## Project Description

Crave is an Airtable and React build where the user is able to make posts and comments to them on various pages. From the homepage, the user is able to navigate to and click on icons that leads to corresponding pages for conversations about music genres such as house and dubstep. Each respective page will lead to a feed of past posts and a form to create a new post.

## Wireframes

The wireframes below shows the homepage and review feed for Crave in web, tablet and phone format. The homepage contains a left side navigation bar displaying the app logo and clickable icons that route to each respective feed. The feeds contain an input form and submit button for posting data. Below the form is a feed of all past forms, along with a delete button for each post.

![imageAlt](https://i.imgur.com/3PaFnxN.png)
![imageAlt](https://i.imgur.com/pa10wAu.png)
![imageAlt](https://i.imgur.com/yLCG66Z.png)

## Component Hierarchy

![imageAlt](https://i.imgur.com/vmjR5iL.png)

## API and Data Sample

https://airtable.com/shrTv92TftYf4SVZZ

Airtable is returning the data for this base as follows:

```
[
    {
        "id": "attJLuc3CPmQ1vU7E",
        "url": "https://dl.airtable.com/.attachments/dc1f744bd2a48773f62bab6595c1f781/33b583b9/lettuce.jpeg",
        "filename": "lettuce.jpeg",
        "size": 64552,
        "type": "image/jpeg",
        "thumbnails": {
            "small": {
                "url": "https://dl.airtable.com/.attachmentThumbnails/8b175057df94df2e65b9dc484fb2aa3b/a297fad8",
                "width": 49,
                "height": 36
            },
            "large": {
                "url": "https://dl.airtable.com/.attachmentThumbnails/99af6bc1f94dd4585526538bb35d0286/091014ca",
                "width": 692,
                "height": 512
            },
            "full": {
                "url": "https://dl.airtable.com/.attachmentThumbnails/90d24081cf06bfaba33dd0c13169e38f/c90bbb9f",
                "width": 3000,
                "height": 3000
            }
        }
    }
]
```

### MVP/PostMVP

#### MVP

- Home page with clickable icons that route to each feed.
- Create area on homepage for voting on favorite genre. 

- Get and post from Airtable.

#### PostMVP

- Delete posts from the feed and airtable.
- Make accounts to sign in and sign out.
- Add a search bar to each page to search users .

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Oct 9-11 | Proposal Approval / Airtable Setup         | Complete |
| Oct 12   | Component Creation / Get, Set, Delete Data | Complete |
| Oct 13   | Oct. 12 cont'd / CSS Components            | Complete |
| Oct 14   | CSS Components cont'd / MVP                | Complete |
| Oct 15   | Advanced CSS                               | Complete |
| Oct 16   | Presentations                              | Complete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Airtable setup            |    H     |     .5hrs      |      1hr      |     1hr     |
| Clickable icons           |    H     |      1hrs      |      1hr      |     1hr     |
| Data population pg 1      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data population pg 2      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Data population pg 3      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Form creation pg 1        |    H     |      2hrs      |     2hrs      |    2hrs     |
| Form creation pg 2        |    H     |      2hrs      |     1 hr      |    1 hr     |
| Form creation pg 3        |    H     |      2hrs      |     1 hr      |     1hr     |
| Data creation/update pg 1 |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data creation/update pg 2 |    H     |      3hrs      |      1hr      |     1hr     |
| Data creation/update pg 3 |    H     |      3hrs      |      1hr      |     1hr     |
| Data deletion pg 1        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 2        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 3        |    H     |      2hrs      |      1hr      |     1hr     |
| Component CSS pg 1        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 2        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 3        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Total                     |    H     |    42.5hrs     |     35hrs     |    35hrs    |

## SWOT Analysis

### Strengths:

excited to get working on this, I know what I want to do and a good understanding of how I will do it. I know what resources to use if I get stuck.

### Weaknesses:

first time building a react application from scratch on my own.

### Opportunities:

will give me the chance to solidify my understanding of react, and test my creativity

### Threats:

getting stuck working on one component too long and not stepping away to take a break and revaluate the problem.
