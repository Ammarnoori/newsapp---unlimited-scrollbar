import React, { Component } from "react";
import Newsitem from "./Newsitem.js";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "NBA playoff push: Kevin Durant's fit in Phoenix and nine other things worth watching down the stretch - CBS Sports",
      description:
        "Can the Lakers make a run? Did the Clippers make a mistake? And who'll be first the East?",
      url: "https://www.cbssports.com/nba/news/nba-playoff-push-kevin-durants-fit-in-phoenix-and-nine-other-things-worth-watching-down-the-stretch/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/02/23/3fdeeaad-7633-46e0-b279-d07962acdeee/thumbnail/1200x675/edf702dd34bb1598b4a1e066e31fc7d2/kd-suns-getty.png",
      publishedAt: "2023-02-23T20:19:00Z",
      content:
        "Whether you enjoyed All-Star weekend (Jayson Tatum, Mac McClung) or not (Paul George, Mike Malone), it's time to transition back to in-game dunks, hard fouls, instant replays and something we haven't… [+9096 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "NFL Analyst Found This ‘Totally Unacceptable’ From Mac Jones - NESN",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S353285989:1677185543060785&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMiVGh0dHBzOi8vbmVzbi5jb20vMjAyMy8wMi9uZmwtYW5hbHlzdC1mb3VuZC10aGlzLXRvdGFsbHktdW5hY2NlcHRhYmxlLWZyb20tbWFjLWpvbmVzL9IBWGh0dHBzOi8vbmVzbi5jb20vMjAyMy8wMi9uZmwtYW5hbHlzdC1mb3VuZC10aGlzLXRvdGFsbHktdW5hY2NlcHRhYmxlLWZyb20tbWFjLWpvbmVzL2FtcC8%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHfSxrfSr62QamLzFsVl6_TLWd2KkUWa-swE6UK5V4XCCSmOB-883NycAXpkde5p8UCWnJQo",
      urlToImage: null,
      publishedAt: "2023-02-23T20:10:33Z",
      content:
        "Not your computer? Use Private Browsing windows to sign in. Learn more",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "NCAA Division I Wrestling Committee releases qualifying tournament allocations for 2023 championships - NCAA.com",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S-1291277775:1677186223219473&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMiigFodHRwczovL3d3dy5uY2FhLmNvbS9uZXdzL3dyZXN0bGluZy9hcnRpY2xlLzIwMjMtMDItMjMvbmNhYS1kaXZpc2lvbi1pLXdyZXN0bGluZy1jb21taXR0ZWUtcmVsZWFzZXMtcXVhbGlmeWluZy10b3VybmFtZW50LWFsbG9jYXRpb25zLTIwMjPSAQA%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=WebLiteSignIn&flowEntry=ServiceLogin&ifkv=AWnogHf37dVYgh8sy3h3vJcrKMMdm6-UxnFNGazz0Ptzj0nfhV771cWjUrstxwFeMYzEfG4CHhou",
      urlToImage: null,
      publishedAt: "2023-02-23T19:53:52Z",
      content: "Not your computer? Use a Private Window to sign in. Learn more",
    },
    {
      source: {
        id: null,
        name: "Daily Faceoff",
      },
      author: null,
      title:
        "If Showtime picks Broadway, Patrick Kane trade to Rangers could come together quickly - Daily Faceoff",
      description: null,
      url: "https://www.dailyfaceoff.com/news/if-showtime-picks-broadway-patrick-kane-trade-to-rangers-could-come-together-quickly",
      urlToImage: null,
      publishedAt: "2023-02-23T19:26:36Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Broncos keeping Marcus Dixon, Christian Parker on coaching staff - NBC Sports",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S1996923037:1677186220736368&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMicWh0dHBzOi8vcHJvZm9vdGJhbGx0YWxrLm5iY3Nwb3J0cy5jb20vMjAyMy8wMi8yMy9icm9uY29zLWtlZXBpbmctbWFyY3VzLWRpeG9uLWNocmlzdGlhbi1wYXJrZXItb24tY29hY2hpbmctc3RhZmYv0gF1aHR0cHM6Ly9wcm9mb290YmFsbHRhbGsubmJjc3BvcnRzLmNvbS8yMDIzLzAyLzIzL2Jyb25jb3Mta2VlcGluZy1tYXJjdXMtZGl4b24tY2hyaXN0aWFuLXBhcmtlci1vbi1jb2FjaGluZy1zdGFmZi9hbXAv%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=WebLiteSignIn&flowEntry=ServiceLogin&ifkv=AWnogHcwygx8DnL_ueqlhLxsNy7bDienpad_JXcB7Bh4cu7xUTAkWeeKxN3O3zXWX42xUWzePA942Q",
      urlToImage: null,
      publishedAt: "2023-02-23T18:45:00Z",
      content: "Not your computer? Use a Private Window to sign in. Learn more",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Manchester United v Barcelona: Europa League playoff, second leg – live - The Guardian",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S906333146:1677185532883021&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMihwFodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vZm9vdGJhbGwvbGl2ZS8yMDIzL2ZlYi8yMy9tYW5jaGVzdGVyLXVuaXRlZC12LWJhcmNlbG9uYS1ldXJvcGEtbGVhZ3VlLXBsYXlvZmYtc2Vjb25kLWxlZy1saXZlLXNjb3JlLXVwZGF0ZXPSAYcBaHR0cHM6Ly9hbXAudGhlZ3VhcmRpYW4uY29tL2Zvb3RiYWxsL2xpdmUvMjAyMy9mZWIvMjMvbWFuY2hlc3Rlci11bml0ZWQtdi1iYXJjZWxvbmEtZXVyb3BhLWxlYWd1ZS1wbGF5b2ZmLXNlY29uZC1sZWctbGl2ZS1zY29yZS11cGRhdGVz%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHffdR2WuDIZGKYAB8ERAlZdm0ns9gu0hjTB9kx54P0D5jbOdnk0py0_7gwjAdQRvlQCqwX6Aw",
      urlToImage: null,
      publishedAt: "2023-02-23T18:45:00Z",
      content:
        "Not your computer? Use Guest mode to sign in privately. Learn more",
    },
    {
      source: {
        id: null,
        name: "247Sports",
      },
      author: "Alejandro Zuniga",
      title:
        "Five notable things Jim Harbaugh said at his Spring Practice press conference - 247Sports",
      description: "...",
      url: "https://247sports.com/college/michigan/Article/Five-notable-things-Jim-Harbaugh-said-at-his-Spring-Practice-press-conference-205205389/",
      urlToImage:
        "https://s3media.247sports.com/Uploads/Assets/627/556/11556627.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630",
      publishedAt: "2023-02-23T18:37:45Z",
      content:
        "Jim Harbaugh met with reporters on Thursday afternoon in his first press conference of the 2023 season.\r\nJust a couple days into Spring Practice, Harbaugh noted there are only so many things to repor… [+4897 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "So, what happened? Your guide to the 2023 MLS offseason | MLSSoccer.com - MLSsoccer.com",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S-502600019:1677185543104064&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMiVGh0dHBzOi8vd3d3Lm1sc3NvY2Nlci5jb20vbmV3cy9zby13aGF0LWhhcHBlbmVkLXlvdXItZ3VpZGUtdG8tdGhlLTIwMjMtbWxzLW9mZnNlYXNvbtIBAA%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHc96afg_ORAoEZ2KAqnq3JJvZmjLTlGfA34U4pcUvvjkOQQ3tPt1Q51nnNa-H_BfeVMV1Hm",
      urlToImage: null,
      publishedAt: "2023-02-23T18:35:01Z",
      content: "Not your computer? Use a Private Window to sign in. Learn more",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title: "Jake Paul vs. Tommy Fury press conference video - Bloody Elbow",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S-1845217547:1677185541616243&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMiY2h0dHBzOi8vd3d3LmJsb29keWVsYm93LmNvbS8yMDIzLzIvMjMvMjM2MTE3OTYvamFrZS1wYXVsLXZzLXRvbW15LWZ1cnktcHJlc3MtY29uZmVyZW5jZS1saXZlLXN0cmVhbdIBcGh0dHBzOi8vd3d3LmJsb29keWVsYm93LmNvbS9wbGF0Zm9ybS9hbXAvMjAyMy8yLzIzLzIzNjExNzk2L2pha2UtcGF1bC12cy10b21teS1mdXJ5LXByZXNzLWNvbmZlcmVuY2UtbGl2ZS1zdHJlYW0%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHfSBnSwgwhFDM1bDNUPx9e0CYUdhmUpyQyrQfU_8_EbrHpI34vkaM1zVaepfFnHpYSy-_4h1Q",
      urlToImage: null,
      publishedAt: "2023-02-23T18:22:54Z",
      content:
        "Not your computer? Use Guest mode to sign in privately. Learn more",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Imagine this: Markelle Fultz has turned out to be better than Ben Simmons - CBS Sports",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S1711589058:1677185541856209&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMibGh0dHBzOi8vd3d3LmNic3Nwb3J0cy5jb20vbmJhL25ld3MvaW1hZ2luZS10aGlzLW1hcmtlbGxlLWZ1bHR6LWhhcy10dXJuZWQtb3V0LXRvLWJlLWJldHRlci10aGFuLWJlbi1zaW1tb25zL9IBcGh0dHBzOi8vd3d3LmNic3Nwb3J0cy5jb20vbmJhL25ld3MvaW1hZ2luZS10aGlzLW1hcmtlbGxlLWZ1bHR6LWhhcy10dXJuZWQtb3V0LXRvLWJlLWJldHRlci10aGFuLWJlbi1zaW1tb25zL2FtcC8%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=WebLiteSignIn&flowEntry=ServiceLogin&ifkv=AWnogHejd0BsbGnlyZAvaBnmvMT1qcwz45F-nI4IQiWJNh1KmMT4biibn-pqLxiE8JCQ0IvHekI2jQ",
      urlToImage: null,
      publishedAt: "2023-02-23T18:13:21Z",
      content:
        "Not your computer? Use InPrivate windows to sign in. Learn more",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Aryna Sabalenka vs. Barbora Krejcikova | 2023 Dubai Quarterfinal | WTA Match Highlights - WTA",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S-2045870536:1677185543079245&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCCAiCzVwOGNHQzZMWTgwmAEB%3Foc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&amp%3Bgae=cb-&hl=en-US&flowName=WebLiteSignIn&flowEntry=ServiceLogin&ifkv=AWnogHeE3LA6iTzovw-f9D7ndvBKg_tuK3ohes1xxvSvpRbK3cCwrW8BnFXli6sKbIjRfoyaiazR",
      urlToImage: null,
      publishedAt: "2023-02-23T18:12:29Z",
      content:
        "Not your computer? Use Private Browsing windows to sign in. Learn more",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title: "Ravens and QB Lamar Jackson could be parting ways - Yahoo Sports",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S1157891666:1677185542898173&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMiRWh0dHBzOi8vc3BvcnRzLnlhaG9vLmNvbS9yYXZlbnMtcWItbGFtYXItamFja3Nvbi1jb3VsZC0xODAwMjUwOTEuaHRtbNIBAA%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=WebLiteSignIn&flowEntry=ServiceLogin&ifkv=AWnogHceFIyqGw97rewAXYhqSG7pyhIy6b9I8qL_6LhMejTOB-sz270ZWNS7e7IwqW9PchHH0DnlIA",
      urlToImage: null,
      publishedAt: "2023-02-23T18:10:09Z",
      content: "Not your computer? Use a Private Window to sign in. Learn more",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Here is why Eric Bieniemy chose to leave Chiefs for Commanders - Chiefs Wire",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S-1022533796:1677186221263224&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMigAFodHRwczovL2NoaWVmc3dpcmUudXNhdG9kYXkuY29tLzIwMjMvMDIvMjMva2Fuc2FzLWNpdHktY2hpZWZzLWVyaWMtYmllbmllbXktZGV0YWlscy1kZWNpc2lvbi10by1sZWF2ZS1mb3Itd2FzaGluZ3Rvbi1jb21tYW5kZXJzL9IBAA%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHfCtHqsRVU_lWiHxOULrV66IJUpkl8zGYumV88nAwoEAv-PPtfZ99-J3QPMeT1yOGb00-Kk",
      urlToImage: null,
      publishedAt: "2023-02-23T17:56:00Z",
      content:
        "Not your computer? Use Guest mode to sign in privately. Learn more",
    },
    {
      source: {
        id: null,
        name: "The Athletic",
      },
      author: "Anthony Slater",
      title:
        "What might the Warriors do with their vacant 15th roster spot? - The Athletic",
      description:
        "Why the Warriors aren't particularly interested in the buyout market and what their philosophy says about what they'll do.",
      url: "https://theathletic.com/4239502/2023/02/23/nba-golden-state-warriors-roster/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/02/23082643/GettyImages-1247178563-1024x683.jpg",
      publishedAt: "2023-02-23T17:43:40Z",
      content:
        "For deep luxury tax teams, the back end of an NBA roster is a commonly used avenue to save money. Its how the Golden State Warriors shaved down their bill the past half-decade. This season, that mean… [+7833 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Todd Monken's Six Pillars to a Good Offense - BaltimoreRavens.com",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S83257:1677185543369176&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMiSGh0dHBzOi8vd3d3LmJhbHRpbW9yZXJhdmVucy5jb20vbmV3cy90b2RkLW1vbmtlbi1waWxsYXJzLXRvLWdvb2Qtb2ZmZW5zZdIBAA%3Foc%3D5&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHciL9GopFiBrrb1VoH8LCR69QcfiAAuEKSXLshqKqsam-zBaoDa9jZbkJgRryJAiyCjJULWYA",
      urlToImage: null,
      publishedAt: "2023-02-23T17:33:25Z",
      content: "Not your computer? Use a Private Window to sign in. Learn more",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "2023 Ivy League Men's Championships: Day 2 Prelims Live Recap - SwimSwam",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S-1459039442:1677185542971606&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMiUWh0dHBzOi8vc3dpbXN3YW0uY29tLzIwMjMtaXZ5LWxlYWd1ZS1tZW5zLWNoYW1waW9uc2hpcHMtZGF5LTItcHJlbGltcy1saXZlLXJlY2FwL9IBAA%3Foc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHfP1mnC-BTFhUME6d-yqe0b-n_cEbqziUkdpF3IDjW1WM1G3434gejS4fFx_WTII5nN5kvBvA",
      urlToImage: null,
      publishedAt: "2023-02-23T17:28:05Z",
      content:
        "Not your computer? Use Guest mode to sign in privately. Learn more",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "College basketball rankings: Brandon Miller avoids punishment after fatal shooting, leads Alabama to road win - CBS Sports",
      description:
        "Miller had the best game of his career amid calls for Crimson Tide coach Nate Oats to suspend his star player",
      url: "https://www.cbssports.com/college-basketball/news/college-basketball-rankings-brandon-miller-avoids-punishment-after-fatal-shooting-leads-alabama-to-road-win/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/02/23/7fb68e03-8710-43ec-842c-201f52750c44/thumbnail/1200x675/593a7b50aa7cc98d2fae2e977ff881c6/top25and1-miller.jpg",
      publishedAt: "2023-02-23T17:22:00Z",
      content:
        "Whether Brandon Miller should've played at South Carolina late Wednesday became the biggest debate in sports in the 24 hours leading up to tipoff -- with Alabama fans largely insisting he should whil… [+2347 chars]",
    },
    {
      source: {
        id: "nfl-news",
        name: "NFL News",
      },
      author: "Eric Edholm,Nick Shook",
      title: "2022 NFL rookie grades: Ranking the classes, 1 to 32 - NFL.com",
      description:
        "Which NFL team had the best 2022 rookie class? The worst? Eric Edholm and Nick Shook rank every group, from No. 1 to 32, providing accompanying grades and analysis.",
      url: "https://www.nfl.com/news/2022-nfl-rookie-grades-ranking-the-classes-1-to-32",
      urlToImage:
        "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/crqswzamfgjeu0o9t5h7",
      publishedAt: "2023-02-23T17:01:00Z",
      content:
        "Round 1\r\nRound 2 \r\nRound 3 \r\nRound 4 \r\nRound 5\r\nRound 6\r\nNotable free agent signees\r\nSHOOK: Tyler Smith was drafted to play left guard next to Tyron Smith, but a preseason injury to the veteran force… [+2807 chars]",
    },
    {
      source: {
        id: null,
        name: "Niners Nation",
      },
      author: "Jordan Elliott",
      title:
        "49ers free agency: Should the 49ers pursue Robert Woods? - Niners Nation",
      description:
        "Woods is an excellent blocker, but would he entice the 49ers enough to offer him a contract during free agency?",
      url: "https://www.ninersnation.com/2023/2/23/23611600/49ers-free-agency-robert-woods",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/7Kbxwf43vBTK4jUCGIqPgRFVtv0=/0x40:2484x1341/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24455072/1290776708.jpg",
      publishedAt: "2023-02-23T17:01:00Z",
      content:
        "This is the time of year when surprise cuts litter the NFL transaction wire and big name players hit the open market as teams look to save money by cutting ties with larger cap hits. On Wednesday mor… [+3197 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Australia clinch thriller to make seventh straight final - ESPNcricinfo",
      description: "",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S1729016618:1677178324778819&amp%3Bcontinue=https:%2F%2Fnews.google.com%2Frss%2Farticles%2FCBMikAFodHRwczovL3d3dy5lc3BuY3JpY2luZm8uY29tL3Nlcmllcy9pY2Mtd29tZW4tcy10MjAtd29ybGQtY3VwLTIwMjItMjMtMTMzODAzNy9hdXN0cmFsaWEtd29tZW4tdnMtaW5kaWEtd29tZW4tMXN0LXNlbWktZmluYWwtMTMzODA2MC9tYXRjaC1yZXBvcnTSAQA%3Foc%3D5%26hl%3Den-US%26gl%3DUS%26ceid%3DUS:en&amp%3Bgae=cb-&hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHcqkFSwer-tVWWXS6hkShW3YCQoK6eORO46nn7Zd42O1rQXeikSimJPXEByXgiLIhywOJnOnQ",
      urlToImage: null,
      publishedAt: "2023-02-23T16:50:28Z",
      content: "Not your computer? Use a Private Window to sign in. Learn more",
    },
  ];

  captalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.captalizeFirstLetter(
      this.props.category
    )}  - Katra News`;
  }
  static defualtProps = {
    country: "US",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  async updateNews() {
    this.props.setProgress(10);
    let myurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(myurl);
    this.props.setProgress(50);
    let parseData = await data.json();
    this.props.setProgress(75);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({ page: (this.state.page = this.state.page + 1) });
    let myurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(myurl);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page,
    });
  };
  render() {
    return (
      <>
        <h2 className="text-center my-4">
          Katra News - Top {this.captalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((elem) => {
                  // if (elem.urlToImage != null) {
                  return (
                    <div className="col-md-4" key={elem.url}>
                      <Newsitem
                        title={elem.title}
                        description={elem.description}
                        imgUrl={elem.urlToImage}
                        newsUrl={elem.url}
                        author={elem.author}
                        date={elem.publishedAt}
                        source={elem.source.name}
                      />
                    </div>
                  );
                  // }
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default news;
