-- 전체 고양이
DELIMITER //
DROP PROCEDURE IF EXISTS CATS //
CREATE PROCEDURE CATS()
  BEGIN
    SELECT * FROM cats;
  END //
DELIMITER ;

CALL CATS();

-- 특정 고양이
DELIMITER //
DROP PROCEDURE IF EXISTS CATS_BY_ID //
CREATE PROCEDURE CATS_BY_ID(catid INT)
  BEGIN
    SELECT * FROM cats WHERE id = catid;
  END //
DELIMITER ;

CALL CATS_BY_ID(2);
