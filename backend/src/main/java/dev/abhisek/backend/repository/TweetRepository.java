package dev.abhisek.backend.repository;

import dev.abhisek.backend.model.Tweet;
import dev.abhisek.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TweetRepository extends JpaRepository<Tweet,Long> {
    List<Tweet> findAllByIsTweetTrueOrderByCreatedAtDesc();

    List<Tweet> findAllByRetweetUsersContainsAndUser_IdAndIsTweetTrueOrderByCreatedAtDesc(User user,Long userId);

    List<Tweet> findAllByLikesContainingOrderByCreatedAtDesc(User user);

    @Query("select t from Tweet t join t.likes l where l.user.id=:userId")
    List<Tweet> findAllByLikesUser_Id(@Param("userId") Long userId);

}
