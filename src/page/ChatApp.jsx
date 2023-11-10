import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useUserContext } from "../context/UserContext";
const api = `https://efreniswsbot.azurewebsites.net//api/get-message?message=`;
import { useNavigate } from "react-router-dom";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [botIsTyping, setBotIsTyping] = useState(false); // Nuevo estado para el bot escribiendo
  const listRef = useRef();
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      const userMessage = { text: newMessage, author: "" };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      setNewMessage("");
      setBotIsTyping(true); // Bot está escribiendo

      try {
        const response = await fetch(api + newMessage);
        const data = await response.json();
        const botMessage = {
          text: data,
          author: "Ana✨",
        };
        const newMessagesWithBotResponse = [...newMessages, botMessage];
        setMessages(newMessagesWithBotResponse);
      } catch (error) {
        console.log(error);
      } finally {
        setBotIsTyping(false); // Bot ha dejado de escribir
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  useEffect(() => {
    // Scroll hacia abajo cuando se agrega un nuevo mensaje
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  return (
    <Container
      component={Grid}
      container
      style={{
        height: "100vh",
        display: "flex",
        marginTop: "70px",
      }}
    >
      <Grid
        ref={listRef}
        item
        xs={12}
        sx={{
          borderRadius: "10px",
          height: "90%",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <Box style={{ flex: 1, padding: "10px" }}>
          <List style={{ marginBottom: "60px", width: "100%" }}>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                style={{
                  textAlign: message.author === "" ? "right" : "left",
                  display: "flex",
                  justifyContent:
                    message.author === "" ? "flex-end" : "flex-start",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  style={{
                    padding: "10px",
                    maxWidth: "100%",
                    height: "100%",
                    borderRadius:
                      message.author === ""
                        ? "20px 20px 0 20px"
                        : "20px 20px 20px 0",
                    backgroundColor:
                      message.author === "" ? "#8BC34A" : "#f0f0f0",
                    color: message.author === "" ? "#f0f0f0" : "black",
                  }}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      style: { fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={
                      message.author === ""
                        ? { style: { color: "white" } }
                        : { style: { color: "black" } }
                    }
                    primary={message.author}
                    secondary={message.text}
                  />
                </Box>
              </ListItem>
            ))}
            {botIsTyping && (
              <ListItem
                style={{
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  style={{
                    padding: "10px",
                    maxWidth: "100%",
                    height: "100%",
                    backgroundColor: "#f0f0f0",
                    color: "black",
                    borderRadius: "20px 20px 20px 0",
                  }}
                >
                  <ListItemText
                    primaryTypographyProps={{ style: { fontWeight: "bold" } }}
                    primary="Ana✨"
                    secondary="Escribiendo..."
                  />
                </Box>
              </ListItem>
            )}
          </List>
        </Box>
      </Grid>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        style={{
          left: "0",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "10%",
          position: "sticky",
          bottom: "0",
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Escribe tu mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button
          color="primary"
          type="submit"
          endIcon={<SendIcon />}
          style={{ marginLeft: "10px" }}
        >
          Enviar
        </Button>
      </Box>
    </Container>
  );
}

export default ChatApp;
