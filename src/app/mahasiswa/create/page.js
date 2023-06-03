"use client";
import {
  Container,
  Card,
  Input,
  Row,
  Textarea,
  Dropdown,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";

function Index() {
  const [nim, setNim] = useState()
  const [nama, setNama] = useState()
  const [alamat, setAlamat] = useState()
  const [noTelp, setNoTelp] = useState()
  const [semester, setSemester] = useState()
  const [jurusan, setJurusan] = useState("Pilih Jurusan Mahasiswa")

  const saveHandler = async() => {
    let payload = {
      
    }
  }

  return (
    <Container fluid>
      <Card variant="bordered" css={{ marginTop: 20, marginBottom: 20 }}>
        <Card.Header>
          <h3>How to consume rest api by : @manusiacoding_</h3>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Row fluid justify="center" css={{ padding: 20 }}>
            <Input
              fullWidth
              clearable
              underlined
              size="md"
              labelPlaceholder="Nim Mahasiswa"
              value={nim}
              onChange={(e) => {
                setNim(e.target.value)
              }}
            />
          </Row>
          <Row fluid justify="center" css={{ padding: 20 }}>
            <Input
              fullWidth
              clearable
              underlined
              size="md"
              labelPlaceholder="Nama Mahasiswa"
              value={nama}
              onChange={(e) => {
                setNama(e.target.value)
              }}
            />
          </Row>
          <Row fluid justify="center" css={{ padding: 20 }}>
            <Input
              fullWidth
              clearable
              underlined
              size="md"
              labelPlaceholder="Nomor Telepon Mahasiswa"
              value={noTelp}
              onChange={(e) => {
                setNoTelp(e.target.value)
              }}
            />
          </Row>
          <Row fluid justify="center" css={{ padding: 20 }}>
            <Textarea
              fullWidth
              underlined
              size="md"
              rows={3}
              labelPlaceholder="Alamat Mahasiswa"
              value={alamat}
              onChange={(e) => {
                setAlamat(e.target.value)
              }}
            />
          </Row>
          <Row fluid justify="left" css={{ padding: 20 }}>
            <Dropdown>
              <Dropdown.Button ghost bordered auto>
                {jurusan}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Pilih Jurusan Mahasiswa"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={jurusan}
                onSelectionChange={setJurusan}
              >
                <Dropdown.Item key="Sistem Informasi">
                  Sistem Informasi
                </Dropdown.Item>
                <Dropdown.Item key="Teknik Informatika">
                  Teknik Informatika
                </Dropdown.Item>
                <Dropdown.Item key="Rekayasa Perangkat Lunak">
                  Rekayasa Perangkat Lunak
                </Dropdown.Item>
                <Dropdown.Item key="Kewirausahaan">
                  Kewirausahaan
                </Dropdown.Item>
                <Dropdown.Item key="Kebidanan">
                  Kebidanan
                </Dropdown.Item>
                <Dropdown.Item key="Manajemen">
                  Manajemen
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row fluid justify="center" css={{ padding: 20 }}>
            <Input
              fullWidth
              clearable
              underlined
              size="md"
              labelPlaceholder="Semester"
              value={semester}
              onChange={(e) => {
                setSemester(e.target.value)
              }}
            />
          </Row>
          <Row fluid justify="left" css={{ padding: 20 }}>
            <Button ghost bordered onClick={saveHandler}>Save</Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Index
