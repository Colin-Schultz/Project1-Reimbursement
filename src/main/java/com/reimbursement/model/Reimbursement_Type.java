package com.reimbursement.model;

public class Reimbursement_Type {
	private int type_id;
	private String type;
	public Reimbursement_Type(int type_id, String type) {
		super();
		this.type_id = type_id;
		this.type = type;
	}
	public int getType_id() {
		return type_id;
	}
	public void setType_id(int type_id) {
		this.type_id = type_id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
}
