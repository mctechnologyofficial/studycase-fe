"use client";
import { useEffect, useState } from "react";
import api from "../../helpers/api";
import { Card, Container, Table } from "@nextui-org/react";

const Get = () => {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    let result = await api.getAllUser()
    setUsers(result.data.users)
  }, []);

  return (
    <Container fluid css={{ backgroundColor: "#eaeaea" }}>
      <Card variant="bordered" css={{ marginTop: 20, marginBottom: 20 }}>
        <Card.Header>
          <h3>Data Mahasiswa</h3>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Table
            lined
            headerLined
            bordered
            aria-label="Example table with dynamic content"
            css={{
              height: "auto",
              minWidth: "100%",
            }}
          >
            <Table.Header>
              <Table.Column key="No">No</Table.Column>
              <Table.Column key="Nim">Nim</Table.Column>
              <Table.Column key="Nama">Nama</Table.Column>
              <Table.Column key="Alamat">Alamat</Table.Column>
              <Table.Column key="Nomor Telepon">Nomor Telepon</Table.Column>
              <Table.Column key="Jurusan">Jurusan</Table.Column>
              <Table.Column key="Semester">Semester</Table.Column>
            </Table.Header>
            <Table.Body>
                {users.map((users, index) => 
                    <Table.Row key={index}>
                        <Table.Cell css={{ color: "#000" }}>{ index + 1 }</Table.Cell>
                        <Table.Cell css={{ color: "#000" }}>{ users.nim }</Table.Cell>
                        <Table.Cell css={{ color: "#000" }}>{ users.nama }</Table.Cell>
                        <Table.Cell css={{ color: "#000" }}>{ users.alamat }</Table.Cell>
                        <Table.Cell css={{ color: "#000" }}>{ users.no_telp }</Table.Cell>
                        <Table.Cell css={{ color: "#000" }}>{ users.jurusan }</Table.Cell>
                        <Table.Cell css={{ color: "#000" }}>{ users.semester }</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Get;
