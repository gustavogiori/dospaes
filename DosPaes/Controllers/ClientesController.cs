﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DosPaes.Models;
using DosPaes.Service;
using Microsoft.AspNetCore.Authorization;
using System.Net;

namespace DosPaes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Policy = Policies.User)]
    public class ClientesController : ControllerBase
    {
        IClienteService _clienteService;
        public ClientesController(IClienteService clienteService)
        {
            _clienteService = clienteService;
        }
        private readonly DataBaseContext _context = new DataBaseContext();

        // GET: api/Clientes
        [HttpGet]
        public async Task<ActionResult<string>> GetCliente()
        {
            var list = await _context.Cliente.ToListAsync();


            var json = JsonService<IEnumerable<Cliente>>.GetJson(list);
            return json;
        }

        // GET: api/Clientes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetCliente(int id)
        {
            try
            {

                return await _clienteService.GetEntityJsonById(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/Clientes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCliente(int id, Cliente cliente)
        {
            if (id != cliente.Id)
            {
                return BadRequest();
            }

            _context.Entry(cliente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Clientes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Cliente>> PostCliente(Cliente cliente)
        {
            try
            {
                if (string.IsNullOrEmpty(cliente.Nome))
                {
                    return StatusCode((int)HttpStatusCode.BadRequest, "Nome é obrigatório e não está preenchido");
                }
                if (TryValidateModel(cliente))
                {
                    _context.Cliente.Add(cliente);
                    await _context.SaveChangesAsync();

                    return CreatedAtAction("GetCliente", new { id = cliente.Id }, cliente);
                }

                return StatusCode((int)HttpStatusCode.BadRequest, GetErros());
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, ex.Message);
            }
        }

        private string GetErros()
        {
            if (!ModelState.IsValid)
            {
                var modelErrors = "";
                foreach (var modelState in ModelState.Values)
                {
                    foreach (var modelError in modelState.Errors)
                    {
                        modelErrors += modelError.ErrorMessage;
                        modelErrors += Environment.NewLine;
                    }
                }
                return modelErrors;
            }
            return "";
        }
        // DELETE: api/Clientes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cliente>> DeleteCliente(int id)
        {
            try
            {

                return await _clienteService.DeleteEntity(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        private bool ClienteExists(int id)
        {
            return _context.Cliente.Any(e => e.Id == id);
        }
    }
}
