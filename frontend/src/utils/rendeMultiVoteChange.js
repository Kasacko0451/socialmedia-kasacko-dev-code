function renderMultiVoteChange(islike, id, info) {

    if (islike == "true") islike = true
    else islike = false

    info.every(e => {
        if (e.id == id) {
            if (e.liked == islike) {
                if (e.liked) e.votes -= 1
                else e.votes += 1

                e.liked = null
            }
            else {
                if (e.liked == null && islike) e.votes += 1
                else if (e.liked == null && !islike) e.votes -= 1
                else {
                    if (e.liked != null && islike) e.votes += 2
                    else if (e.liked != null && !islike) e.votes -= 2
                }
                
                e.liked = islike
            }

            return false;
        }

        return true
    });
  
    return info;
}

export default renderMultiVoteChange;
