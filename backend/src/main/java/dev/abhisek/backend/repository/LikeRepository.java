package dev.abhisek.backend.repository;

import dev.abhisek.backend.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRepository extends JpaRepository<Like,Long> {
    @Query("select l from likes l where l.user.id=:userId and l.tweet.id=:tweetId")
    Like isLikeExist(@Param("userId") Long userId,@Param("tweetId") Long tweetId);

    @Query("select l from likes l where l.tweet.id=:tweetId")
    List<Like> findByTweetId(@Param("tweetId") Long tweetId);
}
