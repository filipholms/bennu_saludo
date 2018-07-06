package com.farewell.rest.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


import com.farewell.rest.error.ErrorMessage;
import com.farewell.rest.person.Person;
import com.google.gson.JsonObject;

@Path("")
public class Service {
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response farewell(Person p) {
		
		if(p.getName().equals("") || p.getName().equals(null)) {
			ErrorMessage message = new ErrorMessage(404, "Unexpected error");
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(message).build();
		}
		
		String mensaje = "Farewell, " + p.getName();	
		JsonObject message = new JsonObject();
		message.addProperty("message", mensaje);
		
		return Response.status(Response.Status.ACCEPTED).entity(message.toString()).build();
	}
	
	
	
	
}
