function renderSingleVoteChange(islike, postinfo) {

    if (islike == "true") islike = true
    else islike = false

    if (postinfo.liked == islike) {
        if (postinfo.liked) postinfo.votes -= 1
        else postinfo.votes += 1

        postinfo.liked = null
    }
    else {
        if (postinfo.liked == null && islike) postinfo.votes += 1
        else if (postinfo.liked == null && !islike) postinfo.votes -= 1
        else {
            if (postinfo.liked != null && islike) postinfo.votes += 2
            else if (postinfo.liked != null && !islike) postinfo.votes -= 2
        }     

        postinfo.liked = islike
    }
  
    return postinfo
}

export default renderSingleVoteChange;
