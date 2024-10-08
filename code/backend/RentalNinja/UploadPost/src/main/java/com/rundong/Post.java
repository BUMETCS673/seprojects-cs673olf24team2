package com.rundong;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAutoGeneratedKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

import java.util.Date;

@DynamoDBTable(tableName = "posts")
public class Post {

    @DynamoDBHashKey(attributeName = "post_id")
    @DynamoDBAutoGeneratedKey
    private String postId;

    @DynamoDBAttribute(attributeName = "user_id")
    private String userId;

    @DynamoDBAttribute(attributeName = "title")
    private String title;

    @DynamoDBAttribute(attributeName = "content")
    private String content;

    @DynamoDBAttribute(attributeName = "contact_info")
    private String contactInfo;

    @DynamoDBAttribute(attributeName = "pic_urls")
    private String picUrls;

    @DynamoDBAttribute(attributeName = "country_code")
    private String countryCode;

    @DynamoDBAttribute(attributeName = "state_code")
    private String stateCode;

    @DynamoDBAttribute(attributeName = "city_code")
    private String cityCode;

    /**
     * optional, can be something like Allston, downtown
     */
    @DynamoDBAttribute(attributeName = "area")
    private String area;

    @DynamoDBAttribute(attributeName = "create_time")
    private Date createTime;

    @DynamoDBAttribute(attributeName = "update_time")
    private Date updateTime;

    /**
     * 0: active, 1: deleted
     */
    @DynamoDBAttribute(attributeName = "delete_flag")
    private Integer deleteFlag;

    public Post(String postId, String userId, String title, String content, String contactInfo, String picUrls, String countryCode, String stateCode, String cityCode, String area, Date createTime, Date updateTime, Integer deleteFlag) {
        this.postId = postId;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.contactInfo = contactInfo;
        this.picUrls = picUrls;
        this.countryCode = countryCode;
        this.stateCode = stateCode;
        this.cityCode = cityCode;
        this.area = area;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.deleteFlag = deleteFlag;
    }

    public String getPostId() {
        return postId;
    }

    public String getUserId() {
        return userId;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public String getPicUrls() {
        return picUrls;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public String getStateCode() {
        return stateCode;
    }

    public String getCityCode() {
        return cityCode;
    }

    public String getArea() {
        return area;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public void setPicUrls(String picUrls) {
        this.picUrls = picUrls;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public void setStateCode(String stateCode) {
        this.stateCode = stateCode;
    }

    public void setCityCode(String cityCode) {
        this.cityCode = cityCode;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
