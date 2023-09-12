package dev.abhisek.backend.service.impl;

import dev.abhisek.backend.exceptions.TweetException;
import dev.abhisek.backend.exceptions.UserException;
import dev.abhisek.backend.model.Like;
import dev.abhisek.backend.model.Tweet;
import dev.abhisek.backend.model.User;
import dev.abhisek.backend.repository.LikeRepository;
import dev.abhisek.backend.repository.TweetRepository;
import dev.abhisek.backend.service.LikeService;
import dev.abhisek.backend.service.TweetService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LikeServiceImpl implements LikeService {
    private final LikeRepository likeRepository;
    private final TweetService tweetService;
    private final TweetRepository tweetRepository;
    @Override
    public Like likeTweet(Long tweetId, User user) throws UserException, TweetException {
        Like isLikeExist=likeRepository.isLikeExist(user.getId(),tweetId);
        if(isLikeExist!=null){
            likeRepository.delete(isLikeExist);
            return isLikeExist;
        }
        Tweet tweet=tweetService.findById(tweetId);
        Like like=Like.builder()
                .tweet(tweet)
                .user(user)
                .build();
        Like savedLike=likeRepository.save(like);
        tweet.getLikes().add(savedLike);
        tweetRepository.save(tweet);

        return savedLike;
    }

    @Override
    public List<Like> getAllLikes(Long tweetId) throws TweetException {
        tweetService.findById(tweetId);
        return likeRepository.findByTweetId(tweetId);
    }
}
