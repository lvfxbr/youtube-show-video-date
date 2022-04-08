const badgeId = "youtube-video-date-badge";

function isYoutubeVideoURL(url) {
    const pattern = /youtube.com\/watch\?v=.+/;

    return pattern.test(url);
}

function handleYoutubeVideoDateBadge() {
    const dateDisplaySelector = "#info-strings yt-formatted-string";
    const dotSelector = "#dot";

    const badge = document.createElement("div");
    const dot = document.querySelector(dotSelector);
    const dateDisplay = document.querySelector(dateDisplaySelector);

    dot.style.display = "none";

    badge.innerText = dateDisplay.innerText;
    badge.classList.add("ysvd-badge");
    badge.id = badgeId;

    document.body.appendChild(badge);
}

function handleVideoDateStyle() {
    const currentURL = window.location.href;

    if (isYoutubeVideoURL(currentURL)) {
        handleYoutubeVideoDateBadge();
    }
}

window.addEventListener(
    "yt-page-data-updated",
    () => {
        if (document.getElementById(badgeId)) {
            document.body.removeChild(document.getElementById(badgeId));
        }

        setTimeout(() => {
            handleVideoDateStyle();
        }, 1);
    },
    true
);
